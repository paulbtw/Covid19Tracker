import React, { useState, useEffect, ReactNode, createContext } from "react";
import {
  fetchContinentData,
  fetchCountriesData,
  fetchGeoData,
  fetchGlobalData,
  fetchGlobalHistoricalData,
  fetchHistoricalCountryData,
  fetchHistoricalUsaData,
  fetchMovementCountries,
  fetchMovementCountry,
  fetchUsaData,
} from "../api";
import timeSince from "../helper/timeHelper";
import {
  IChartData,
  IData,
  IGlobalCurData,
  IMovementCountry,
} from "../interface/interface";

export const MainContext = createContext({
  isLoading: true,
  centerDisplay: "Map",
  showTableData: "Countries",
  tableData: [] as IData[],
  selected: "USA",
  handleTableChange: (value: string) => {},
  handleSelectedChange: (value: string) => {},
  handleCenterChange: (value: string) => {},
  handleGlobalChartChange: (value: string) => {},
  lastUpdatedString: "Loading...",
  chartData: {} as IChartData,
  parsedGeoData: {} as GeoJSON.FeatureCollection,
  globalCurData: {} as IGlobalCurData,
  globalData: {} as IChartData,
  globalChart: "Data",
  movementData: {} as IMovementCountry,
  isChartLoading: false,
});

interface MainContextProps {
  children?: ReactNode;
}

const MainContextProvider: React.FC<MainContextProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChartLoading, setIsChartLoading] = useState(false);

  // Data
  // Table
  const [countryData, setCountryData] = useState([] as IData[]);
  const [usaData, setUsaData] = useState([] as IData[]);
  const [continentData, setContinentData] = useState([] as IData[]);
  const [movementData, setMovementData] = useState({} as IMovementCountry);
  const [movementCountries, setMovementCountries] = useState([] as IData[]);
  // Charts
  const [chartData, setChartData] = useState({} as IChartData);
  // Map
  const [geoData, setGeoData] = useState({} as GeoJSON.FeatureCollection);
  const [parsedGeoData, setParsedGeoData] = useState(
    {} as GeoJSON.FeatureCollection
  );
  // Global
  const [globalData, setGlobalData] = useState({} as IChartData);
  const [globalCurData, setGlobalCurData] = useState({} as IGlobalCurData);

  // Switches
  // Table
  const [showTableData, setShowTableData] = useState("Countries");
  const [selected, setSelected] = useState("USA");
  // Center
  const [centerDisplay, setCenterDisplay] = useState("Map");
  // Cards
  const [globalChart, setGlobalChart] = useState("Data");

  useEffect(() => {
    getInitData();
  }, []);

  useEffect(() => {
    handleTableDataChange();
  }, [selected]);

  useEffect(() => {
    generateGeoData();
  }, [isLoading]);

  const tableData: IData[] =
    showTableData === "Countries"
      ? countryData
      : showTableData === "USA"
      ? usaData
      : showTableData === "Continents"
      ? continentData
      : centerDisplay === "Movement"
      ? movementCountries
      : countryData;

  const getInitData = async () => {
    setIsLoading(true);

    const responseCountriesData = await fetchCountriesData();
    if (responseCountriesData) {
      setCountryData(responseCountriesData);
    }

    const responseUsaData = await fetchUsaData();
    if (responseUsaData) {
      setUsaData(responseUsaData);
    }

    const responseContinentData = await fetchContinentData();
    if (responseContinentData) {
      setContinentData(responseContinentData);
    }

    const responseGeoData = await fetchGeoData();
    if (responseGeoData) {
      setGeoData(responseGeoData);
    }

    const responseMovementCountries = await fetchMovementCountries();
    if (responseMovementCountries) {
      setMovementCountries(responseMovementCountries);
    }

    const responseMovementCountry = await fetchMovementCountry(selected);
    if (responseMovementCountry) {
      setMovementData(responseMovementCountry);
    }

    const responseGlobalData = await fetchGlobalHistoricalData();
    if (responseGlobalData) {
      setGlobalData(responseGlobalData);
    }

    const responseGlobalCurData = await fetchGlobalData();
    if (responseGlobalCurData) {
      setGlobalCurData(responseGlobalCurData);
    }

    setIsLoading(false);
  };

  const handleTableChange = (value: string) => {
    setShowTableData(value);
  };

  const handleSelectedChange = (name: string) => {
    setSelected(name);
  };

  const handleTableDataChange = async () => {
    setIsChartLoading(true);
    if (showTableData === "Continents") {
      console.log("continents");
    } else if (showTableData === "Movement") {
      const response = await fetchMovementCountry(selected);
      if (response) {
        setMovementData(response);
      }
    } else if (showTableData === "Countries") {
      const response = await fetchHistoricalCountryData(selected);
      if (response) {
        setChartData(response);
      }
    } else if (showTableData === "USA") {
      const response = await fetchHistoricalUsaData(selected);
      if (response) {
        setChartData(response);
      }
    }
    setIsChartLoading(false);
    return;
  };

  const handleCenterChange = (value: string) => {
    if (value === "Movement") {
      setShowTableData(value);
    } else if (showTableData === "Movement") {
      setShowTableData("Countries");
    }
    setCenterDisplay(value);
  };

  const handleGlobalChartChange = (value: string) => {
    setGlobalChart(value);
  };

  const lastUpdated = countryData.length ? countryData[0].updated : null;
  const lastUpdatedString = lastUpdated
    ? timeSince(new Date(lastUpdated)) + " ago"
    : "Loading...";

  const generateGeoData = () => {
    const geoDataCopy = geoData;
    console.log(geoDataCopy.features);
    if (geoDataCopy.features && countryData.length) {
      geoData.features.map((country) => {
        countryData.map((covidCountry) => {
          if (
            covidCountry.countryInfo &&
            country.properties &&
            country.properties.iso_a3 === covidCountry.countryInfo.iso3
          ) {
            country.properties = {
              ...covidCountry,
              ...country.properties,
            };
          }
        });
        if (country.properties) {
          if (!country.properties.cases) {
            country.properties.cases = 0;
          }
          if (!country.properties.todayCases) {
            country.properties.todayCases = 0;
          }
          if (!country.properties.deaths) {
            country.properties.deaths = 0;
          }
          if (!country.properties.todayDeaths) {
            country.properties.todayDeaths = 0;
          }
          if (!country.properties.recovered) {
            country.properties.recovered = 0;
          }
        }
      });

      setParsedGeoData(geoDataCopy);
    }
  };

  return (
    <MainContext.Provider
      value={{
        isLoading: isLoading,
        centerDisplay: centerDisplay,
        tableData: tableData,
        selected: selected,
        showTableData: showTableData,
        handleTableChange: handleTableChange,
        handleSelectedChange: handleSelectedChange,
        handleCenterChange: handleCenterChange,
        handleGlobalChartChange: handleGlobalChartChange,
        lastUpdatedString: lastUpdatedString,
        chartData: chartData,
        parsedGeoData: parsedGeoData,
        globalCurData: globalCurData,
        globalData: globalData,
        globalChart: globalChart,
        movementData: movementData,
        isChartLoading: isChartLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
