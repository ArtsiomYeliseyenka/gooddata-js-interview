import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ReactDatePicker from 'react-datepicker';
import { formatDate } from 'common/utils';
import styles from './datePicker.scss';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

export const DatePicker = ({ value, onChange, ...rest }) => {
  return (
    <div className={cx('date-picker')}>
      <ReactDatePicker
        selected={new Date(value)}
        onChange={(newValue) => {
          onChange(formatDate(newValue));
        }}
        {...rest}
      />
    </div>
  );
};
DatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
