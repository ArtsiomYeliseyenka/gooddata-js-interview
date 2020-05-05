import { all, takeEvery, put } from 'redux-saga/effects';
import { NOTIFICATION_TYPES } from 'common/constants';
import { showNotificationAction } from 'store/reducers/notifications';
import { SET_PERIOD } from './constants';

function* showNotification() {
  yield put(
    showNotificationAction({
      type: NOTIFICATION_TYPES.SUCCESS,
      message: 'Notification as example of side-effect',
    }),
  );
}

function* watchChangePeriod() {
  yield takeEvery(SET_PERIOD, showNotification);
}

export function* statisticsSagas() {
  yield all([watchChangePeriod()]);
}
