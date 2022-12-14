import { fromEvent } from 'rxjs';

const button = document.getElementById('create-notification');
const notificationMessages = document.getElementById('notification-messages');

const createNotificationElement = () => {
  const element = document.createElement('article');
  element.innerText = 'Something happened.';
  return element;
};

const addMessageToDOM = () => {
  const notification = createNotificationElement();
  notificationMessages.appendChild(notification);
};

const buttonClicks$ = fromEvent(button, 'click');

buttonClicks$.subscribe(addMessageToDOM);
