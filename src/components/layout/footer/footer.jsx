import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.scss';

const cx = classNames.bind(styles);

export const Footer = () => {
  return <div className={cx('footer')}>footer</div>;
};
