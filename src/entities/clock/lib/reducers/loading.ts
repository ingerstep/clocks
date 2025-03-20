import { ACTION_TYPES } from '@entities/clock/config';
import { LoadingActionTypes, LoadingState } from './types';

const { FETCH_TIMEZONES } = ACTION_TYPES;

const initialState: LoadingState = {
    loading: false,
};

export const loadingReducer = (
    state = initialState,
    action: LoadingActionTypes
): LoadingState => {
    switch (action.type) {
        case FETCH_TIMEZONES:
            if (typeof action.payload === 'boolean') {
                return {
                    ...state,
                    loading: action.payload,
                };
            }
            return state;
        default:
            return state;
    }
};