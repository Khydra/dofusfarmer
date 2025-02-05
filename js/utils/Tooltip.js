import { Element } from './Element.js';
import { text } from '../file/text.js';

export class Tooltip {
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
        this.element = null;

        this.parentElement.addEventListener("mouseenter", this.showTooltip.bind(this));
        this.parentElement.addEventListener("mouseleave", this.hideTooltip.bind(this));
    }

    showTooltip() {
        this.element = document.createElement("div");
        this.element.className = "tooltip";
        this.generateContent();
        document.body.appendChild(this.element);

        // Mover la posición del tooltip solo en el evento mousemove
        this.parentElement.addEventListener("mousemove", this.positionTooltip.bind(this));
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
        this.parentElement.removeEventListener("mousemove", this.positionTooltip.bind(this));
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
                this.eventGuide.innerText = `RMB: Opciones`;
            break;

            case "equipment":
                this.infoType.innerText = `${this.data.sort.toUpperCase()} ◆ NIVEL ${this.data.level}`;
                this.infoSet.innerText = `${this.data.set.name}`;
                this.eventGuide.innerText = `RMB: Opciones \n DblClick: Equipar \n CTRL: Valores teóricos \n SHIFT: Comparar`;
                //this.statExo.innerHTML = `<b>1</b> Alcance`;
                Object.keys(this.data.stats).forEach((key)=> {
                   if (this.data.stats[key] > 0) this.statValues.innerHTML += `<span class="stat-green"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
                   else if (this.data.stats[key] < 0) this.statValues.innerHTML += `<span class="stat-red"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
                   else if (this.data.stats[key] === 0) this.statValues.innerHTML += `<span class="stat-no"><b>${this.data.stats[key]}</b> ${text.stat[key]}</span> <br>`; 
                })

                this.statCraft.innerText = `Creado por: Khydra \n Modificado por: Khytrayer`;
            break;

            case "consumable":
                this.eventGuide.innerText = `RMB: Opciones \n DblClick: Utilizar`;
            break;
        }
    }
    
}
