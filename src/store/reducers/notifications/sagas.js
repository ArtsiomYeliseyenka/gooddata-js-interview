import { all, takeEvery, put, delay } from 'redux-saga/effects';
import { SHOW_NOTIFICATION } from './constants';
import { hideNotificationAction, showNotificationAction } from './actionCreators';

function* hideNotificationAfterDelay({ payload }) {
  yield delay(8000);
  yield put(hideNotificationAction(payload.id));
}

export function* showNotification(config) {
  yield put(showNotificationAction(config));
}

function* watchAddNotification() {
  yield takeEvery(SHOW_NOTIFICATION, hideNotificationAfterDelay);
}

export function* notificationSagas() {
  yield all([watchAddNotification()]);
}
