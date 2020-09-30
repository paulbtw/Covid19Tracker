import React, { useContext } from "react";
import { MainContext } from "../../../context/main.context";
import { useStyles } from "./Chart.styles";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

interface ChartProps {}

const options = {
  title: { text: "Test" },
  scales: {
    xAxes: [
      {
        title: "time",
        type: "time",
        time: {
          unit: "month",
          unitStepSize: 1,
          displayFormats: {
            millisecond: "MMM DD",
            second: "MMM DD",
            minute: "MMM DD",
            hour: "MMM DD",
            day: "MMM DD",
            week: "MMM DD",
            month: "MMMM DD",
            quarter: "MMM DD",
            year: "MMM DD",
          },
        },
      },
    ],
  },
};

export const Chart: React.FC<ChartProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);

  const {
    chartData: { cases, deaths, recovered },
    selected,
  } = mainContext;

  const lineChart = cases && (
    <>
      <Typography className={classes.chartTitle} variant="h4">
        This is the data for: {selected}
      </Typography>
      <Line
        options={options}
        data={{
          labels: Object.keys(cases).map((date) => date),
          datasets: [
            {
              data: Object.entries(cases).map((value) => value[1]),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
            {
              data: Object.entries(deaths).map((value) => value[1]),
              label: "Deaths",
              borderColor: "red",
              //backgroundColor: "rgba(255,0,0, 0,5)",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
            {
              data: recovered
                ? Object.entries(recovered).map((value) => value[1])
                : 0,
              label: "Recovered",
              borderColor: "green",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
            {
              data: cases
                ? Object.entries(cases).map(
                    (value) =>
                      value[1] -
                      (deaths ? deaths[value[0]] : 0) -
                      (recovered ? recovered[value[0]] : 0)
                  )
                : 0,
              label: "Active",
              borderColor: "orange",
              pointBorderColor: "rgba(0,0,0,0)",
            },
          ],
        }}
      />
    </>
  );
  return <>{lineChart}</>;
};
