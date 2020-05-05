import { compose } from 'redux';
import { connect } from 'react-redux';
import { notificationsSelector } from 'store/reducers/notifications';
import { NotificationsPure } from '.';

const enhance = compose(
  connect((state) => ({
    notifications: notificationsSelector(state),
  })),
);
export const NotificationsEnhanced = enhance(NotificationsPure);
