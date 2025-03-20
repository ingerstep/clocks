import { combineReducers, Reducer } from 'redux';

import { clocksReducer } from './clocks';
import { timezonesReducer } from './timezones';
import { loadingReducer } from './loading';

import { AppAction } from './types';
import { RootState } from '@entities/clock/config';

export const rootReducer: Reducer<RootState, AppAction> = combineReducers({
    clocks: clocksReducer,
    timezones: timezonesReducer,
    loading: loadingReducer,
});
