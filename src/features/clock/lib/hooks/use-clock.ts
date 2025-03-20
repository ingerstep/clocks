import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@entities/clock/config";
import { addClock, fetchTimezones, removeClock, setTimezone } from "@entities/clock/lib/actions";

export const useClock = () => {
    const dispatch = useDispatch();
    const { clocks, timezones, loading } = useSelector((state: RootState) => ({
        clocks: state.clocks.clocks,
        timezones: state.timezones.timezones,
        loading: state.loading.loading,
    }));

    useEffect(() => {
        dispatch(fetchTimezones());
    }, [dispatch]);

    const availableCities = Object.keys(timezones).filter(
        (city) =>
            !clocks.some((clock) => clock.timezone === city) ||
            clocks.filter((clock) => clock.timezone === city).length === 1
    );

    const handleCityChange = (index: number, city: string) => {
        dispatch(setTimezone(index, city));
    };

    const setClockCount = (count: number) => {
        const currentCount = clocks.length;
        if (count > currentCount) {
            for (let i = currentCount; i < count; i++) {
                dispatch(addClock());
            }
        } else if (count < currentCount) {
            for (let i = currentCount - 1; i >= count; i--) {
                dispatch(removeClock(i));
            }
        }
    };

    return {
        availableCities,
        loading,
        clocks,
        timezones,
        setClockCount,
        handleCityChange,
    };
};