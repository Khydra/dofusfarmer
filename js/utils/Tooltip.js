import { Element } from './Element.js';
import { text } from '../file/text.js';

export class Tooltip {
    static isControlActive = false;

    constructor(parentElement, data, location, src = undefined) {
        this.parentElement = parentElement;
        this.data = data;
        this.location = location;
        this.src = src;
        this.element = null;

        // Bind una sola vez en el constructor para mantener la misma referencia
        this.handleControlToggle = this.handleControlToggle.bind(this);
        this.positionTooltip = this.positionTooltip.bind(this);

        this.parentElement.addEventListener("mouseenter", this.showTooltip.bind(this));
        this.parentElement.addEventListener("mouseleave", this.hideTooltip.bind(this));
        this.parentElement.addEventListener("dblclick", this.hideTooltip.bind(this));
    }

    showTooltip() {
        this.element = document.createElement("div");
        this.element.className = "tooltip";
        this.generateContent();
        document.body.appendChild(this.element);

        // Mover la posición del tooltip solo en el evento mousemove
        this.parentElement.addEventListener("mousemove", this.positionTooltip);
        document.addEventListener("keydown", this.handleControlToggle); // Usar la referencia ya vinculada
    }

    positionTooltip(event) {
        if (!this.element || !event) return; // Verificar que el tooltip y el evento existan

        const offset = 15;
        const { clientX: mouseX, clientY: mouseY } = event;
        const tooltipWidth = this.element.offsetWidth;
        const tooltipHeight = this.element.offsetHeight;

        let left = mouseX + offset;
        let top = mouseY + offset;

        if (left + tooltipWidth > window.innerWidth) {
            left = mouseX - tooltipWidth - offset;
        }
        if (top + tooltipHeight > window.innerHeight) {
            top = mouseY - tooltipHeight - offset;
        }

        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }

    hideTooltip() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }

        this.parentElement.removeEventListener("mousemove", this.positionTooltip);
        document.removeEventListener("keydown", this.handleControlToggle); // Eliminar el evento usando la misma referencia
    }

    generateContent() {
        this.infoContainer = new Element(this.element, { className: 'tooltip-info-container' }).element;
        if (this.data.type == 'equipment') this.statContainer = new Element(this.element, { className: 'tooltip-stat-container' }).element;
        this.eventContainer = new Element(this.element, { className: 'tooltip-event-container' }).element;

        this.infoTittle = new Element(this.infoContainer, { className: 'tooltip-info-tittle', text: this.data.name }).element;
        this.infoType = new Element(this.infoContainer, { className: 'tooltip-info-type' }).element;
        this.infoSet = new Element(this.infoContainer, { className: 'tooltip-info-set' }).element;

        if (this.data.type == 'equipment') {
            this.statExo = new Element(this.statContainer, { className: 'tooltip-stat-exo' }).element;
            this.statValues = new Element(this.statContainer, { className: 'tooltip-stat-values' }).element;
            this.statCraft = new Element(this.statContainer, { className: 'tooltip-stat-craft' }).element;
        }

        this.eventGuide = new Element(this.eventContainer, { className: 'tooltip-event-guide' }).element;
        switch (this.data.type) {
            case "resource":
                this.infoType.innerText = `RECURSO ◆ ${this.data.sort.toUpperCase()}`;
                if (this.data.sort == 'rune') {
                    let runeValue = [];
                    Object.keys(this.data.value).forEach((key, i) => {
                        runeValue[i] = [key, this.data.value[key]];
                    })
                    this.eventGuide.innerHTML = `Efecto: ${runeValue[0][1]} ${text.stat[runeValue[0][0]]} <br> Densidad: ${runeValue[1][1]} <br><br>`;
                }

                if (this.location == 'inventoryWindow') this.eventGuide.innerHTML += `RMB: Opciones <br> SHIFT: Almacenar`;
                if (this.location == 'bankWindow') this.eventGuide.innerHTML += `RMB: Opciones <br> SHIFT: Retirar`;
                if (this.location == 'jobWindow') {
                    const quantityInventory = this.src.component.component.main.inventory.items[this.data.key]?.quantity ?? 0;
                    const quantityBank = this.src.component.component.main.bank.items[this.data.key]?.quantity ?? 0;
                    this.eventGuide.innerHTML += `Inventario: ${quantityInventory} <br> Bancosako: ${quantityBank}`;
                }
                if (this.location == 'forjamagoWindow') this.eventGuide.innerHTML += `Click: Añadir`;
                
            break;
            case "equipment":
                this.infoType.innerText = `${this.data.sort.toUpperCase()} ◆ NIVEL ${this.data.level}`;
                if (this.data.set) this.infoSet.innerText = `${this.data.set.name}`;

                if (this.location == 'jobWindow') {
                    this.showRecipeStats();
                }

                else {
                    this.showEquipmentStats();
                    if (this.data.autor) {
                        this.statCraft.innerHTML += `
                            Fabricado por: <span class="stat-craft">${this.data.autor}</span> <br> 
                        `;
                    }

                    if (this.data.mage) {
                        this.statCraft.innerHTML += `
                            Modificado por: <span class="stat-craft">${this.data.autor}</span>
                        `;
                    }
                }

                if (this.location == 'equipmentWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Desquipar \n CTRL: Valores teóricos`;
                if (this.location == 'inventoryWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Equipar \n CTRL: Valores teóricos \n SHIFT: Almacenar`;
                if (this.location == 'bankWindow') this.eventGuide.innerText = `RMB: Opciones \n CTRL: Valores teóricos \n SHIFT: Retirar`;
                if (this.location == 'forjamagoWindow') this.eventGuide.innerText = `Click: Añadir`;
            break;

            case "consumable":
                if (this.location == 'inventoryWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Utilizar \n SHIFT: Almacenar`;
            break;
        }
    }

    showEquipmentStats = () => {
        this.statValues.innerHTML = "";

        if (this.data.sort == 'arma') {
            Object.keys(this.data.power).forEach((key) => {
                this.data.power[key].forEach((value) => {
                    if (value[2]) this.statValues.innerHTML += `<span class='${key}'>${value[0]} a ${value[1]} Robo ${text.element[key]}</span><br>`;
                    else this.statValues.innerHTML += `<span class='${key}'>${value[0]} a ${value[1]} Daños ${text.element[key]}</span><br>`;
                })
                //this.statValues.innerHTML = `<span class='${key}'><b>${this.data.power[key][i][0]} a ${this.data.power[key][i][1]} ${text.stat[key]}</b></span><br>`;
            })
        }

        if (!Tooltip.isControlActive) {
            Object.keys(this.data.stats).forEach((key) => {
                if (this.data.stats[key] > 0) this.statValues.innerHTML += `<span class="stat-green"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
                else if (this.data.stats[key] < 0) this.statValues.innerHTML += `<span class="stat-red"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
                else if (this.data.stats[key] === 0) this.statValues.innerHTML += `<span class="stat-no"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
            })
        } else {
            Object.keys(this.data.stats).forEach((key) => {
                if (this.data.stats[key] > 0) {
                    this.statValues.innerHTML +=  `<span class="stat-green"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span>`;
                    if (this.data.base[key].length > 1) this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]} a ${this.data.base[key][1]}]</span><br>`;
                    else this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]}]</span><br>`;
                }

                if (this.data.stats[key] < 0) {
                    this.statValues.innerHTML +=  `<span class="stat-red"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span>`;
                    if (this.data.base[key].length > 1) this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]} a ${this.data.base[key][1]}]</span><br>`;
                    else this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]}]</span><br>`;
                }

                if (this.data.stats[key] === 0) {
                    this.statValues.innerHTML +=  `<span class="stat-no"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span>`;
                    if (this.data.base[key].length > 1) this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]} a ${this.data.base[key][1]}]</span><br>`;
                    else this.statValues.innerHTML += `<span class="stat-teoric">[${this.data.base[key][0]}]</span><br>`;
                }

            })
        }
    }

    showRecipeStats = () => {
        this.statValues.innerHTML = "";

        if (this.data.sort == 'arma') {
            Object.keys(this.data.power).forEach((key, i) => {
                this.statValues.innerHTML = `<span class='${key}'><b>${this.data.power[key][i][0]} a ${this.data.power[key][i][1]} ${text.stat[key]}</b></span><br>`;
            })
        }

        Object.keys(this.data.stats).forEach((key) => {
            if (this.data.stats[key].length > 1) this.statValues.innerHTML += `<span class="stat-teoric">${this.data.stats[key][0]} a ${this.data.stats[key][1]} ${text.stat[key]}</span> <br>`;
            else this.statValues.innerHTML += `<span class="stat-teoric">${this.data.stats[key][0]} ${text.stat[key]}</span> <br>`;
        })
        this.statContainer.style.padding = '0px 0px 2px 20px';
        this.eventGuide.style.padding = '0px';
    }


    handleControlToggle(event) {
        if (event.key === "Control" && this.data.type === 'equipment' && this.location !== 'jobWindow') {
            Tooltip.isControlActive = !Tooltip.isControlActive;
            if (this.data.type === 'equipment') {
                this.showEquipmentStats();
            }
        }

        if (event.key === "Shift") {
            if (this.location === 'inventoryWindow') {
                this.src.component.main.inventory.removeAll(this.data);
                this.src.component.main.bank.obtainItem(this.data, this.data.quantity);
                this.hideTooltip();
                this.src.update();
                this.src.component.bankWindow.updateItems();

            } else if (this.location === 'bankWindow') {
                this.src.component.main.bank.removeAll(this.data);
                this.src.component.main.inventory.obtainItem(this.data, this.data.quantity);
                this.hideTooltip();
                this.src.updateItems();
                this.src.component.inventoryWindow.update();
            } 
        }
    }
}

export function removeTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.remove();
    });
}