import { ACTION_TYPES } from '@entities/clock/config';
import { TimezonesActionTypes, TimezonesState } from './types';

const { FETCH_TIMEZONES } = ACTION_TYPES;

const initialTimezonesState: TimezonesState = {
    timezones: {},
};

export const timezonesReducer = (
    state = initialTimezonesState,
    action: TimezonesActionTypes
): TimezonesState => {
    switch (action.type) {
        case FETCH_TIMEZONES:
            if (typeof action.payload === "object" && !Array.isArray(action.payload)) {
                return { ...state, timezones: action.payload };
            }
            return state;
        default:
            return state;
    }
};