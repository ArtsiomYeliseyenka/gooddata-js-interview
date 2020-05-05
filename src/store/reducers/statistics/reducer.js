import { INITIAL_STATE, SET_PERIOD } from './constants';

export const statisticsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PERIOD: {
      return {
        period: {
          ...state.period,
          ...payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
