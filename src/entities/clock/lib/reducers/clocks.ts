import { ACTION_TYPES } from '../config';
import { ClockActionTypes, ClocksState } from './types';

const { ADD_CLOCK, REMOVE_CLOCK, SET_TIMEZONE } = ACTION_TYPES;

const initialState: ClocksState = {
    clocks: [],
};

export const clocksReducer = (
    state = initialState,
    action: ClockActionTypes
): ClocksState => {
    switch (action.type) {
        case ADD_CLOCK:
            return {
                ...state,
                clocks: [...state.clocks, action.payload],
            };
        case REMOVE_CLOCK:
            return {
                ...state,
                clocks: state.clocks.filter((_, index) => index !== action.payload),
            };
        case SET_TIMEZONE:
            return {
                ...state,
                clocks: state.clocks.map((clock, index) =>
                    index === action.payload.index
                        ? { ...clock, timezone: action.payload.timezone }
                        : clock
                ),
            };
        default:
            return state;
    }
};
