import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DatePicker } from 'components/inputs';
import styles from './dateRangePicker.scss';

const cx = classNames.bind(styles);
export const DateRangePicker = ({ value: { from, to }, onChange }) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  return (
    <div className={cx('date-range-picker')}>
      <DatePicker
        value={from}
        onChange={(value) => {
          onChange({ from: value, to });
        }}
        selectsStart
        startDate={fromDate}
        endDate={toDate}
      />
      {' - '}
      <DatePicker
        value={to}
        onChange={(value) => {
          onChange({ from, to: value });
        }}
        selectsEnd
        startDate={fromDate}
        endDate={toDate}
      />
    </div>
  );
};
DateRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
