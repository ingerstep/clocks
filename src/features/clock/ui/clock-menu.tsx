import { ClockMenuProps } from "./types";

export const ClockMenu = ({
  index,
  timezones,
  selectedCity,
  availableCities,
  clocks,
  handleCityChange,
}: ClockMenuProps) => {
  const filteredCities = availableCities.filter(
    (city) =>
      city === selectedCity ||
      !clocks.some((c, idx) => idx !== index && c.timezone === city)
  );

  return (
    <select
      value={selectedCity || ""}
      onChange={(e) => handleCityChange(index, e.target.value)}
      className="mb-4 w-[200px] px-1 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400 transition-colors duration-200"
    >
      <option value="" className="text-gray-500">
        Выберите город
      </option>
      {filteredCities.map((city) => (
        <option key={city} value={city} className="text-gray-700">
          {city} (UTC{timezones[city]})
        </option>
      ))}
    </select>
  );
};
