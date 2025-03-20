import { ACTION_TYPES } from "@entities/clock/config";

const { REMOVE_CLOCK } = ACTION_TYPES;

export const removeClock = (index: number) => ({
    type: REMOVE_CLOCK,
    payload: index,
});