import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.scss';

const cx = classNames.bind(styles);

export const Header = () => {
  return <div className={cx('header')}>header</div>;
};
