import { countries } from "countries-list";
import { City, ICity } from "country-state-city";
import { GeographicalDataFetcherProps } from "@/interfaces/utils-interface";

// GET CONTINENTS
export const getRegionOptions = (): GeographicalDataFetcherProps[] => {
  const continents = new Set<string>();

  Object.values(countries).forEach((country) => {
    if (country.continent) continents.add(country.continent);
  });

  return [
    { label: "All", value: "all" },
    ...Array.from(continents).map((continent) => ({
      label: continent,
      value: continent.toLowerCase(),
    })),
  ];
};

// GET COUNTRY
export const getCountryOptions = (
  continent?: string
): GeographicalDataFetcherProps[] => {
  const filteredCountries = Object.entries(countries).filter(
    ([, country]) =>
      !continent || country.continent.toLowerCase() === continent.toLowerCase()
  );
  return [
    { label: "All", value: "all" },
    ...filteredCountries.map(([code, country]) => ({
      label: country.name,
      value: code,
    })),
  ];
};

// GET CITY
export const getCityOptions = (
  countryCode?: string
): GeographicalDataFetcherProps[] => {
  if (!countryCode) return [{ label: "All", value: "all" }];

  const cities: ICity[] | undefined = City.getCitiesOfCountry(countryCode);
  if (!cities) return [{ label: "All", value: "all" }];
  return [
    { label: "All", value: "all" },
    ...cities.map((city) => ({ label: city.name, value: city.name })),
  ];
};
