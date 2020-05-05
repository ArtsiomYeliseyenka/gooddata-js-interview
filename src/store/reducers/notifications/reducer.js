import { HIDE_NOTIFICATION, SHOW_NOTIFICATION, INITIAL_STATE } from './constants';

export const notificationsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return [...state, payload];
    case HIDE_NOTIFICATION:
      return state.filter(({ id: notificationId }) => notificationId !== payload.id);
    default:
      return state;
  }
};
