import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from './constants';

export const showNotificationAction = ({ message, type }) => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    type,
    id: new Date().valueOf().toString(),
  },
});

export const hideNotificationAction = (id) => ({
  type: HIDE_NOTIFICATION,
  payload: { id },
});
