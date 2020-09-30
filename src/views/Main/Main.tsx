import { CircularProgress, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Cards, Center, Header, LastUpdated } from "../../components";
import { TablePicker } from "../../components/Table/Table";
import { MainContext } from "../../context/main.context";
import { useStyles } from "./Main.styles";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);
  return (
    <div className={classes.main}>
      <Header />
      {mainContext.isLoading ? (
        <div className={classes.loadingDiv}>
          <CircularProgress
            className={classes.loader}
            size={500}
            color="primary"
          />
        </div>
      ) : (
        <Grid container spacing={3} justify="center">
          <Grid item lg={3} md={3}>
            <TablePicker />
            <LastUpdated />
          </Grid>
          <Grid item lg={6} md={6}>
            <Center />
          </Grid>
          <Grid item lg={3} md={3}>
            <Cards />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
