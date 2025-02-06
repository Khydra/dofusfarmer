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
        this.statContainer = new Element(this.element, { className: 'tooltip-stat-container' }).element;
        this.eventContainer = new Element(this.element, { className: 'tooltip-event-container' }).element;

        this.infoTittle = new Element(this.infoContainer, { className: 'tooltip-info-tittle', text: this.data.name }).element;
        this.infoType = new Element(this.infoContainer, { className: 'tooltip-info-type' }).element;
        this.infoSet = new Element(this.infoContainer, { className: 'tooltip-info-set' }).element;

        this.statExo = new Element(this.statContainer, { className: 'tooltip-stat-exo' }).element;
        this.statValues = new Element(this.statContainer, { className: 'tooltip-stat-values' }).element;
        this.statCraft = new Element(this.statContainer, { className: 'tooltip-stat-craft' }).element;

        this.eventGuide = new Element(this.eventContainer, { className: 'tooltip-event-guide' }).element;

        switch (this.data.type) {

            case "resource":
                this.infoType.innerText = `RECURSO ◆ ${this.data.sort.toUpperCase()}`;
                if (this.location == 'inventoryWindow') this.eventGuide.innerText = `RMB: Opciones \n SHIFT: Almacenar`;
                if (this.location == 'bankWindow') this.eventGuide.innerText = `RMB: Opciones \n SHIFT: Retirar`;
            break;

            case "equipment":
                this.infoType.innerText = `${this.data.sort.toUpperCase()} ◆ NIVEL ${this.data.level}`;
                this.infoSet.innerText = `${this.data.set.name}`;

                this.showEquipmentStats();

                this.statCraft.innerHTML = `
                    Creado por: <span class="stat-craft">Khydra</span> <br> 
                    Modificado por: <span class="stat-craft">Khytrayer</span>
                `;

                if (this.location == 'equipmentWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Desquipar \n CTRL: Valores teóricos`;
                if (this.location == 'inventoryWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Equipar \n CTRL: Valores teóricos \n SHIFT: Almacenar`;
            break;

            case "consumable":
                if (this.location == 'inventoryWindow') this.eventGuide.innerText = `RMB: Opciones \n DblClick: Utilizar \n SHIFT: Almacenar`;
            break;
        }
    }

    showEquipmentStats = () => {
        this.statValues.innerHTML = "";
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

    handleControlToggle(event) {
        if (event.key === "Control" && this.data.type === 'equipment') {
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
