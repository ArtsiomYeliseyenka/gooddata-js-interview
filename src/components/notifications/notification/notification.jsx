import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './notification.scss';

const cx = classNames.bind(styles);

export const Notification = ({ hideNotification, id, data: { type, message } }) => {
  return (
    <div
      className={cx('notification', type)}
      onClick={() => {
        hideNotification(id);
      }}
    >
      {message}
    </div>
  );
};
Notification.propTypes = {
  id: PropTypes.string.isRequired,
  hideNotification: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
