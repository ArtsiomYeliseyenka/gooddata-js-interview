import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Notifications } from 'components/notifications';
import { Header } from './header';
import { Footer } from './footer';
import styles from './layout.scss';

const cx = classNames.bind(styles);

export const Layout = ({ children }) => {
  return (
    <div className={cx('layout')}>
      <Header />
      <div className={cx('scroll-wrapper')}>
        <div className={cx('content')}>{children}</div>
        <Footer />
      </div>
      <Notifications />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};
