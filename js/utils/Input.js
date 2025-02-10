export class Input {
    constructor(container, options = {}) {
        this.container = container;
        this.options = options;
        this.element = this.create();

        if (this.options.onlyLetters) this.addOnlyLettersValidation();
        if (this.options.onlyNumbers) this.addOnlyNumbersValidation();
        if (this.options.minValue) this.addMinValueValidation();


        if (this.options.onInput) {
            this.element.addEventListener("input", this.options.onInput);
        }
    }

    create() {
        const element = document.createElement('input');
        element.setAttribute("type", "text");

        if (this.options.className) element.className = this.options.className;
        if (this.options.maxlength) element.setAttribute("maxlength", this.options.maxlength);
        if (this.options.placeholder)  element.placeholder = this.options.placeholder;
        this.container.appendChild(element);
        return element;
    }

    addOnlyLettersValidation() {
        this.element.addEventListener("input", () => {
            this.element.value = this.element.value.replace(/[^a-zA-Z-]/g, '');
        });
    }

    addOnlyNumbersValidation() {
        this.element.addEventListener("input", () => {
            this.element.value = this.element.value.replace(/[^0-9]/g, '');
        });
    }

    addMinValueValidation() {
        this.element.addEventListener("input", () => {
            if (this.element.value === "" || parseInt(this.element.value, 10) < 1) {
                this.element.value = "";
            }
        });

        this.element.addEventListener("blur", () => {
            if (this.element.value === "") {
                this.element.value = "1"; // Establece 1 como valor mínimo por defecto si está vacío
            }
        });
    }
}