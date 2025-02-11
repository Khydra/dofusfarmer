import { Element } from './Element.js';

export class Notification {
    constructor() {
        this.container = new Element(document.body, { className: 'notification-container' }).element; 
    }

    display(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;

        this.container.appendChild(notification);

        // Remover la notificación después de 2 segundos
        setTimeout(() => {
            notification.style.animation = 'notification-fade-out 0.5s forwards';
            setTimeout(() => notification.remove(), 500); // Esperar a que termine la animación de desvanecimiento
        }, 3000);
    }
}
