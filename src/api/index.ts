import axios from "axios";
import {
  IData,
  IUsaData,
  IContinentData,
  IHistoricalCountryData,
  IHistoricalStateData,
  ICountryData,
} from "../interface/interface";
const baseUrl = "https://disease.sh/v3/covid-19/";
const geoDataUrl = "https://bpouncey.github.io/geo-json-world/custom.geo.json";

export const fetchCountriesData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}countries?sort=cases&yesterday=true`
    );
    const data: IData[] = [];
    response.data.map((value: ICountryData) => {
      data.push({
        country: value.country,
        cases: value.cases,
        todayCases: value.todayCases,
        deaths: value.deaths,
        todayDeaths: value.todayDeaths,
        updated: value.updated,
        countryInfo: {
          iso3: value.countryInfo.iso3,
        },
      });
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchUsaData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}states?sort=cases&yesterday=true`
    );
    const data: IData[] = [];
    response.data.map((value: IUsaData) => {
      data.push({
        country: value.state,
        cases: value.cases,
        todayCases: value.todayCases,
        deaths: value.deaths,
        todayDeaths: value.todayDeaths,
        updated: value.updated,
      });
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchContinentData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}continents?yesterday=true&sort=cases`
    );
    const data: IData[] = [];
    response.data.map((value: IContinentData) => {
      data.push({
        country: value.continent,
        cases: value.cases,
        todayCases: value.todayCases,
        deaths: value.deaths,
        todayDeaths: value.todayDeaths,
        updated: value.updated,
      });
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchHistoricalCountryData = async (country: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}historical/${country.toLowerCase()}?lastdays=all`
    );
    const data: IHistoricalCountryData = response.data;
    const {
      timeline: { cases, deaths, recovered },
    } = data;
    return { cases, deaths, recovered };
  } catch (err) {
    console.log(err);
  }
};

export const fetchHistoricalUsaData = async (state: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}historical/usacounties/${state.toLowerCase()}?lastdays=all`
    );
    const data: IHistoricalStateData[] = response.data;

    const cases: {
      [key: string]: number;
    } = {};
    const deaths: {
      [key: string]: number;
    } = {};

    const arrayDates = Object.keys(data[0].timeline.cases);
    for (let j = 0; j < arrayDates.length; j++) {
      cases[arrayDates[j]] = 0;
      deaths[arrayDates[j]] = 0;
    }

    data.map((state) => {
      for (let i = 0; i < arrayDates.length; i++) {
        cases[arrayDates[i]] += state.timeline.cases[arrayDates[i]];
        deaths[arrayDates[i]] += state.timeline.deaths[arrayDates[i]];
      }
    });

    return { cases, deaths };
  } catch (err) {
    console.log(err);
  }
};

export const fetchGeoData = async () => {
  try {
    const response = await axios.get(geoDataUrl);
    return response.data as GeoJSON.FeatureCollection;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovementCountries = async () => {
  try {
    const response = await axios.get(`${baseUrl}apple/countries`);
    const data: string[] = response.data;
    const parsedData: IData[] = [];

    data.map((value) => {
      parsedData.push({
        country: value,
        cases: 0,
        todayCases: 0,
        deaths: 0,
        todayDeaths: 0,
        updated: 0,
      });
    });
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovementCountry = async (country: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}apple/countries/${country}/all`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGlobalHistoricalData = async () => {
  try {
    const response = await axios.get(`${baseUrl}historical/all?lastdays=all`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(`${baseUrl}all?lastdays=all`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
