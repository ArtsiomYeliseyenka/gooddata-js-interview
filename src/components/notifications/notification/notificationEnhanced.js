import { compose } from 'redux';
import { connect } from 'react-redux';
import { hideNotificationAction } from 'store/reducers/notifications';
import { NotificationPure } from '.';

const enhance = compose(connect(null, { hideNotification: hideNotificationAction }));
export const NotificationEnhanced = enhance(NotificationPure);
