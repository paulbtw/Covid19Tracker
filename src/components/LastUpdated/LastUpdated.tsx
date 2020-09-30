import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { MainContext } from "../../context/main.context";
import { useStyles } from "./LastUpdated.styles";

interface LastUpdatedProps {}

export const LastUpdated: React.FC<LastUpdatedProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Last updated:</Typography>
      <Typography className={classes.value}>
        {mainContext.lastUpdatedString}
      </Typography>
    </div>
  );
};
