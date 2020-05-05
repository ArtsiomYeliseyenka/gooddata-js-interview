import { INITIAL_STATE } from './constants';

const statisticsReducerSelector = (state) => state.statistics || INITIAL_STATE;
export const statisticsPeriodSelector = (state) => statisticsReducerSelector(state).period;
