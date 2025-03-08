import { Blackscreen } from './Blackscreen.js';

export class Window {
    static zIndexCounter = 1;

    constructor(title, width, height, x = null, y = null) {
        this.isOpen = false;
        this.title = title;
        this.width = width;
        this.height = height;
        
        // Calcular posición central si no se proporciona
        this.x = x !== null ? x : (window.innerWidth - width) / 2;
        this.y = y !== null ? y : (window.innerHeight - height) / 3;

        // Crear la ventana
        this.window = document.createElement("div");
        this.window.className = "window";
        this.window.style.width = `${width}px`;
        this.window.style.height = `${height}px`;

        // Crear la cabecera de la ventana
        this.header = document.createElement("div");
        this.header.className = "window-header stroke";
        this.header.innerHTML = title;

        // Botón de cerrar
        this.closeButton = document.createElement("div");
        this.closeButton.innerHTML = "✖";
        this.closeButton.className = "window-close";
        this.closeButton.addEventListener("click", () => this.close());

        // Crear el contenido
        this.container = document.createElement("div");
        this.container.className = "window-container";

        // Agregar evento para traer la ventana al frente
        this.window.addEventListener("mousedown", () => this.bringToFront());

        // Añadir elementos a la ventana
        this.header.appendChild(this.closeButton);
        this.window.appendChild(this.header);
        this.window.appendChild(this.container);
    }

    open(bs = false) {
        if (bs) {
            this.blacksreen = new Blackscreen(this.window);
        } else document.body.appendChild(this.window);
        this.window.style.left = `${this.x}px`;
        this.window.style.top = `${Math.max(this.y, 0)}px`; // Evita que se abra fuera de la pantalla por arriba
        this.isOpen = true;
        this.window.style.zIndex = ++Window.zIndexCounter;
        this.initDrag();
    }

    initDrag() {
        let offsetX = 0, offsetY = 0, isDragging = false;

        this.header.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - this.window.offsetLeft;
            offsetY = e.clientY - this.window.offsetTop;
            this.header.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                const newX = e.clientX - offsetX;
                const newY = Math.max(e.clientY - offsetY, 0); // Restringe la posición en Y
                this.window.style.left = `${newX}px`;
                this.window.style.top = `${newY}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            this.header.style.cursor = "grab";
        });
    }

    bringToFront() {
        this.window.style.zIndex = ++Window.zIndexCounter;
    }

    close(bs) {
        if (bs) this.blacksreen.destroy();
        this.isOpen = false;
        this.window.remove();
    }
}
