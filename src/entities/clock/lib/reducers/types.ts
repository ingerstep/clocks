import { ACTION_TYPES } from "@entities/clock/config";

const { FETCH_TIMEZONES, ADD_CLOCK, REMOVE_CLOCK, SET_TIMEZONE } = ACTION_TYPES

export interface LoadingState {
    loading: boolean;
}

export interface FetchTimezonesAction {
    type: typeof FETCH_TIMEZONES;
    payload: boolean;
}

export interface FetchTimezonesSuccessAction {
    type: typeof FETCH_TIMEZONES;
    payload: { [city: string]: string };
}

export type LoadingActionTypes = FetchTimezonesAction;

export interface TimezoneData {
    [city: string]: string;
}

export interface TimezonesState {
    timezones: TimezoneData;
}

export type TimezonesActionTypes = FetchTimezonesSuccessAction

export interface Clock {
    timezone: string | null;
}

export interface ClocksState {
    clocks: Clock[];
}

export interface AddClockAction {
    type: typeof ADD_CLOCK;
    payload: Clock;
}

export interface RemoveClockAction {
    type: typeof REMOVE_CLOCK;
    payload: number;
}

export interface SetTimezoneAction {
    type: typeof SET_TIMEZONE;
    payload: {
        index: number;
        timezone: string;
    };
}

export type ClockActionTypes = AddClockAction | RemoveClockAction | SetTimezoneAction;

export type AppAction = ClockActionTypes | TimezonesActionTypes | FetchTimezonesAction;