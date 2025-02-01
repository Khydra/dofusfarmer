export class Window {
    constructor(title, content, width, height, x, y) {
        this.isOpen = false;
        this.title = title;
        this.content = content;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        // Crear la ventana
        this.window = document.createElement("div");
        this.window.className = "window";
        this.window.style.width = `${width}px`;
        this.window.style.height = `${height}px`;

        // Crear la cabecera de la ventana
        this.header = document.createElement("div");
        this.header.className = "window-header";
        this.header.innerHTML = title;

        // Botón de cerrar
        this.closeButton = document.createElement("div");
        this.closeButton.innerHTML = "✖";
        this.closeButton.className = "window-close";
        this.closeButton.addEventListener("click", () => this.close());

        // Crear el contenido
        this.content = document.createElement("div");
        this.content.className = "window-content";
        this.content.innerHTML = content;

        // Añadir elementos a la ventana
        this.header.appendChild(this.closeButton);
        this.window.appendChild(this.header);
        this.window.appendChild(this.content);    
    }

    open() {
        document.body.appendChild(this.window);
        this.window.style.left = `${this.x}px`;
        this.window.style.top = `${this.y}px`;
        this.isOpen = true;
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
                this.window.style.left = `${e.clientX - offsetX}px`;
                this.window.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            this.header.style.cursor = "grab";
        });
    }

    close() {
        this.isOpen = false;
        this.window.remove();
    }

}