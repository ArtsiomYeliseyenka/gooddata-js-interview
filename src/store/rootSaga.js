import { all } from 'redux-saga/effects';
import { statisticsSagas } from './reducers/statistics';
import { notificationSagas } from './reducers/notifications';

export function* rootSagas() {
  yield all([statisticsSagas(), notificationSagas()]);
}
