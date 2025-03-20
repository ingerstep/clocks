import { ClocksState, TimezonesState, LoadingState } from "@entities/clock";

export interface RootState {
    clocks: ClocksState;
    timezones: TimezonesState;
    loading: LoadingState;
}