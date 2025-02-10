export class Notification {
  constructor() {
    this.container = document.getElementById('notification-container');
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    this.container.appendChild(notification);

    // Remover la notificación después de 2 segundos
    setTimeout(() => {
      notification.style.animation = 'fade-out 0.5s forwards';
      setTimeout(() => notification.remove(), 500); // Esperar a que termine la animación de desvanecimiento
    }, 2000);
  }
}

// Ejemplo de uso
const notificationSystem = new NotificationSystem();
document.body.addEventListener('click', () => {
  notificationSystem.showNotification('¡Notificación: Has hecho clic!');
});
