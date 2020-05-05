import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './chart.scss';
import '@gooddata/react-components/styles/css/main.css';

const cx = classNames.bind(styles);

export const Chart = ({ ChartComponent, label, ...rest }) => {
  return (
    <div className={cx('chart')}>
      {label && <h1 className={cx('label')}>{label}</h1>}
      <div className={cx('wrapper')}>
        <ChartComponent {...rest} />
      </div>
    </div>
  );
};
Chart.propTypes = {
  ChartComponent: PropTypes.func.isRequired,
  label: PropTypes.node,
};

Chart.defaultProps = {
  label: null,
};
