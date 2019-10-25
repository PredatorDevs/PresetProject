import { store } from 'react-notifications-component';

export const showNotification = (type, title, message) => {
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2500,
      onScreen: false,
    },
    width: 300,
  });
}