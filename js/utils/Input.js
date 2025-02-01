export class Input {
    constructor(container, options = {}) {
        this.container = container;
        this.options = options;
        this.element = this.create();

        if (this.options.onlyLetters) {
            this.addOnlyLettersValidation();
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
            // Permite solo letras A-Z y a-z (sin tildes, espacios, ni ñ)
            this.element.value = this.element.value.replace(/[^a-zA-Z-]/g, '');
        });
    }
}