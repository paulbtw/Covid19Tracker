import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import cx from "classnames";
import { useStyles } from "./Cards.styles";
import CountUp from "react-countup";
import { MainContext } from "../../context/main.context";
import { Charts } from "./Charts/Charts";

interface CardsProps {}

export const Cards: React.FC<CardsProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid
          item
          component={Card}
          lg={12}
          md={12}
          className={cx(classes.card, classes.cases)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={classes.title}
            >
              Cases
            </Typography>
            <Typography variant="h2" className={classes.valueTotal}>
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.cases
                    ? mainContext.globalCurData.cases
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography variant="h6" className={classes.change}>
              +
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.todayCases
                    ? mainContext.globalCurData.todayCases
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          lg={6}
          md={6}
          className={cx(classes.card, classes.recovered)}
        >
          <CardContent className={classes.cardcontent}>
            <Typography
              color="textSecondary"
              gutterBottom
              className={classes.title}
            >
              Recovered
            </Typography>
            <Typography variant="h3" className={classes.value}>
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.recovered
                    ? mainContext.globalCurData.recovered
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography variant="h6" className={classes.change}>
              +
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.todayRecovered
                    ? mainContext.globalCurData.todayRecovered
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          lg={6}
          md={6}
          className={cx(classes.card, classes.deaths)}
        >
          <CardContent className={classes.cardcontent}>
            <Typography
              color="textSecondary"
              gutterBottom
              className={classes.title}
            >
              Deaths
            </Typography>
            <Typography variant="h3" className={classes.value}>
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.deaths
                    ? mainContext.globalCurData.deaths
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography variant="h6" className={classes.change}>
              +
              <CountUp
                start={0}
                end={
                  mainContext.globalCurData.todayDeaths
                    ? mainContext.globalCurData.todayDeaths
                    : 0
                }
                duration={2.5}
                separator="."
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item lg={12} md={12}>
          <Charts />
        </Grid>
        <Grid container spacing={0}>
          <Grid item lg={4} md={4}>
            <div
              className={cx(
                classes.changer,
                mainContext.globalChart === "Data" && classes.active
              )}
              onClick={(event) => {
                mainContext.handleGlobalChartChange(
                  event.currentTarget.innerText
                );
              }}
            >
              <Typography className={classes.changerValue}>Data</Typography>
            </div>
          </Grid>
          <Grid item lg={4} md={4}>
            <div
              className={cx(
                classes.changer,
                mainContext.globalChart === "Cases" && classes.active
              )}
              onClick={(event) => {
                mainContext.handleGlobalChartChange(
                  event.currentTarget.innerText
                );
              }}
            >
              <Typography className={classes.changerValue}>Cases</Typography>
            </div>
          </Grid>
          <Grid item lg={4} md={4}>
            <div
              className={cx(
                classes.changer,
                mainContext.globalChart === "Deaths" && classes.active
              )}
              onClick={(event) => {
                mainContext.handleGlobalChartChange(
                  event.currentTarget.innerText
                );
              }}
            >
              <Typography className={classes.changerValue}>Deaths</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
