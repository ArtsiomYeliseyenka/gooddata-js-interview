import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Notification } from './notification';
import styles from './notifications.scss';

const cx = classNames.bind(styles);

export const Notifications = ({ notifications }) => {
  return createPortal(
    <div className={cx('notifications')}>
      <TransitionGroup>
        {notifications.map(({ id, ...rest }) => (
          <CSSTransition key={id} timeout={500} classNames="notification-transition">
            <Notification id={id} data={rest} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>,
    document.getElementById('notifications-root'),
  );
};
Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};
