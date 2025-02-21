import { Element } from './Element.js';

export class Selector {
    constructor(container, label, values, selectorClassName, cb) {
        this.container = container;
        this.label = label;
        this.values = values;
        this.selectorClassName = selectorClassName;
        this.cb = cb;
        this.currentIndex = 0;

        this.render();
    }

    render() {
        this.selector = new Element(this.container, { className: `selector-container stroke ${this.selectorClassName}` }).element; 

        if (this.label != null) {
            this.label = new Element(this.selector, { className: 'selector-label', text: this.label }).element; 
            this.leftArrow = new Element(this.selector, { className: 'selector-arrow', text: "◄" }).element; 
            this.value = new Element(this.selector, { className: 'selector-value stroke', text: this.values[this.currentIndex] }).element; 
            this.rightArrow = new Element(this.selector, { className: 'selector-arrow', text: "►" }).element; 
        } else {
            this.leftArrow = new Element(this.selector, { className: 'selector-arrow-nl', text: "◄" }).element; 
            this.value = new Element(this.selector, { className: 'selector-value-nl stroke', text: this.values[this.currentIndex] }).element; 
            this.rightArrow = new Element(this.selector, { className: 'selector-arrow-nl', text: "►" }).element; 
        }


        this.leftArrow.addEventListener('click', () => this.previousValue());
        this.rightArrow.addEventListener('click', () => this.nextValue());
    }

    previousValue() {
        this.currentIndex = (this.currentIndex - 1 + this.values.length) % this.values.length;
        this.updateValue();
    }

    nextValue() {
        this.currentIndex = (this.currentIndex + 1) % this.values.length;
        this.updateValue();
    }

    updateValue() {
        this.value.innerText = this.values[this.currentIndex];
        if (this.cb) this.cb(this.currentIndex);
    }
}