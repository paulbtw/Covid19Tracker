import { Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import { MainContext } from "../../../context/main.context";
import { useStyles, dataLayer } from "./Map.styles";

const MAPBOXTOKEN = process.env.REACT_APP_MAPBOX_KEY;

interface MapProps {}

export const Map: React.FC<MapProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);

  const [state, setState] = useState({
    hoveredFeature: null as any,
    x: null as any,
    y: null as any,
  });

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    bearing: 0,
    pitch: 0,
  });

  const onHover = (event: any) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature =
      features && features.find((f: any) => f.layer.id === "data");
    setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  const renderCountry = () => {
    const { hoveredFeature, x, y } = state;
    return (
      hoveredFeature && (
        <div className={classes.tooltip} style={{ left: x, top: y }}>
          <div className={classes.tooltipTitle}>
            <Typography>{hoveredFeature.properties.sovereignt}</Typography>
          </div>
          <div>
            <Typography>
              Cases:
              <span className={classes.cases}>
                {hoveredFeature.properties.cases.toLocaleString()} (+
                {hoveredFeature.properties.todayCases.toLocaleString()})
              </span>
            </Typography>
          </div>
          <div>
            <Typography>
              Deaths:{" "}
              <span className={classes.deaths}>
                {hoveredFeature.properties.deaths.toLocaleString()} (+
                {hoveredFeature.properties.todayDeaths.toLocaleString()})
              </span>
            </Typography>
          </div>
          <div>
            <Typography>
              Recovered:{" "}
              <span className={classes.recovered.toLocaleString()}>
                {hoveredFeature.properties.recovered.toLocaleString()}
              </span>
            </Typography>
          </div>
        </div>
      )
    );
  };
  return (
    <div>
      <MapGL
        {...viewport}
        width="100%"
        height="500px"
        mapStyle={"mapbox://styles/mapbox/dark-v10"}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOXTOKEN}
        onHover={onHover}
      >
        <Source type="geojson" data={mainContext.parsedGeoData}>
          <Layer {...dataLayer} />
        </Source>
        {renderCountry()}
      </MapGL>
    </div>
  );
};
