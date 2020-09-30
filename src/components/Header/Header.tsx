import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Header.styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <div className={classes.containerItem}>
          <Typography className={classes.containerText}>
            Data from{" "}
            <a
              href="https://disease.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disease.sh
            </a>
          </Typography>
        </div>
        <div className={classes.containerItem}>
          <Typography className={classes.containerText}>
            Inspired by{" "}
            <a
              href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Johns Hopkins University
            </a>
          </Typography>
        </div>
        <div className={classes.containerItem}>
          <Typography className={classes.containerText}>
            View on{" "}
            <a
              href="https://github.com/paulbtw/coronaTracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};
