import { compose } from 'redux';
import { connect } from 'react-redux';
import { statisticsPeriodSelector, setStatisticsPeriod } from 'store/reducers/statistics';
import { Statistics } from './statistics';

const enhance = compose(
  connect(
    (state) => ({
      statisticsPeriod: statisticsPeriodSelector(state),
    }),
    { setStatisticsPeriod },
  ),
);

export const StatisticsEnhanced = enhance(Statistics);
