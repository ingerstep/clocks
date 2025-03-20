export interface ClocksSelectProps {
    clockCount: number;
    setClockCount: (count: number) => void;
}

export interface Clock {
    timezone: string | null;
}

export interface ClockMenuProps {
    timezones: { [city: string]: string };
    index: number;
    selectedCity: string | null;
    clocks: Clock[];
    availableCities: string[];
    handleCityChange: (index: number, city: string) => void;
}

export interface ClockDisplayProps {
    timezoneOffset: number;
}