import { Grid, Typography } from "@material-ui/core";
import cx from "classnames";
import React, { useContext } from "react";
import { MainContext } from "../../context/main.context";
import { useStyles } from "./Center.styles";
import { Chart } from "./Chart/Chart";
import { Map } from "./Map/Map";
import { Movement } from "./Movement/Movement";

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item lg={3} md={3}>
          <div
            className={cx(
              classes.centerChanger,
              mainContext.centerDisplay === "Map" && classes.active
            )}
            id="Map"
            onClick={(event) => {
              mainContext.handleCenterChange(event.currentTarget.id);
            }}
          >
            <Typography className={classes.centerChangerValue}>Map</Typography>
          </div>
        </Grid>
        <Grid item lg={3} md={3}>
          <div
            className={cx(
              classes.centerChanger,
              mainContext.centerDisplay === "Chart" && classes.active
            )}
            id="Chart"
            onClick={(event) => {
              mainContext.handleCenterChange(event.currentTarget.id);
            }}
          >
            <Typography className={classes.centerChangerValue}>
              Chart
            </Typography>
          </div>
        </Grid>
        <Grid item lg={3} md={3}>
          <div
            className={cx(
              classes.centerChanger,
              mainContext.centerDisplay === "Movement" && classes.active
            )}
            id="Movement"
            onClick={(event) => {
              mainContext.handleCenterChange(event.currentTarget.id);
            }}
          >
            <Typography className={classes.centerChangerValue}>
              Movement
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.container}>
        {mainContext.centerDisplay === "Map" ? (
          <Map />
        ) : mainContext.centerDisplay === "Chart" ? (
          <Chart />
        ) : mainContext.centerDisplay === "Movement" ? (
          <Movement />
        ) : null}
      </div>
    </div>
  );
};
