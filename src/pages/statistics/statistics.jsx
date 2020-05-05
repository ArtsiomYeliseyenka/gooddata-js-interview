import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Chart } from 'components/chart';
import { ColumnChart } from '@gooddata/react-components';
import { PROJECT, EXTERNAL_ENDPOINTS, LOCAL_IDS } from 'common/constants';
import { getViewBy, getMeasures, getPeriodFilter } from 'common/utils';
import { DateRangePicker } from 'components/inputs';
import styles from './statistics.scss';

const cx = classNames.bind(styles);
const VIEW_BY = getViewBy({
  uri: EXTERNAL_ENDPOINTS.DATE_IN_MONTHS,
  localIdentifier: LOCAL_IDS.A1,
});
const MEASURES = getMeasures({
  uri: EXTERNAL_ENDPOINTS.GROSS_PROFIT_MEASURE,
  localIdentifier: LOCAL_IDS.M1,
  alias: '$ Gross Profit',
});

export const Statistics = ({ statisticsPeriod, setStatisticsPeriod }) => {
  return (
    <div className={cx('statistics')}>
      <Chart
        label={
          <>
            <span>$ Gross Profit in period: </span>
            <DateRangePicker value={statisticsPeriod} onChange={setStatisticsPeriod} />
          </>
        }
        ChartComponent={ColumnChart}
        projectId={PROJECT.ID}
        measures={MEASURES}
        filters={[getPeriodFilter({ uri: EXTERNAL_ENDPOINTS.DATE, period: statisticsPeriod })]}
      />
      <Chart
        label="$ Gross Profit - All months"
        ChartComponent={ColumnChart}
        projectId={PROJECT.ID}
        viewBy={VIEW_BY}
        measures={MEASURES}
      />
    </div>
  );
};
Statistics.propTypes = {
  statisticsPeriod: PropTypes.object.isRequired,
  setStatisticsPeriod: PropTypes.func.isRequired,
};
