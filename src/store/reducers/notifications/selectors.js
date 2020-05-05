import { INITIAL_STATE } from './constants';

export const notificationsSelector = (state) => state.notifications || INITIAL_STATE;
