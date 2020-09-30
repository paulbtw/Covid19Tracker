import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { MainContext } from "../../../context/main.context";
import { useStyles } from "./Charts.styles";

interface ChartsProps {}

const options = {
  title: { text: "Global Data" },
  legend: {
    labels: {
      fontSize: 12,
      padding: 5,
      boxWidth: 20,
    },
  },
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
            month: "MMM DD",
            quarter: "MMM DD",
            year: "MMM DD",
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          stepSize: 500000,
          callback: function (label: number, index: number, labels: string) {
            return label / 1000 + "k";
          },
        },
      },
    ],
  },
};

export const Charts: React.FC<ChartsProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);

  const lineChart = mainContext.globalData.cases ? (
    <>
      <Line
        options={options}
        data={{
          labels: Object.keys(mainContext.globalData.cases).map((date) => date),
          datasets: [
            {
              data: Object.entries(mainContext.globalData.cases).map(
                (value) => value[1]
              ),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
              pointRadius: 0,
            },
            {
              data: Object.entries(mainContext.globalData.deaths).map(
                (value) => value[1]
              ),
              label: "Deaths",
              borderColor: "red",
              fill: true,
              pointRadius: 0,
            },
            {
              //@ts-ignore
              data: Object.entries(mainContext.globalData.recovered).map(
                (value: any) => value[1]
              ),
              label: "Recovered",
              borderColor: "green",
              fill: true,
              pointRadius: 0,
            },
            {
              data: mainContext.globalData.cases
                ? Object.entries(mainContext.globalData.cases).map(
                    (value) =>
                      value[1] -
                      (mainContext.globalData.deaths
                        ? mainContext.globalData.deaths[value[0]]
                        : 0) -
                      (mainContext.globalData.recovered
                        ? mainContext.globalData.recovered[value[0]]
                        : 0)
                  )
                : 0,
              label: "Active",
              borderColor: "orange",
              fill: true,
              pointRadius: 0,
            },
          ],
        }}
      />
    </>
  ) : null;

  const optionsBar = {
    title: { text: "Global Data" },
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
              month: "MMM DD",
              quarter: "MMM DD",
              year: "MMM DD",
            },
          },
        },
      ],
    },
  };

  const barChart = mainContext.globalData.cases ? (
    <>
      <Bar
        options={optionsBar}
        data={{
          labels: Object.keys(mainContext.globalData.cases).map((date) => date),
          datasets: [
            {
              data: Object.entries(mainContext.globalData.cases).map(
                (value, index, array) =>
                  // @ts-ignore
                  value[1] - (index > 0 && array[index - 1][1])
              ),
              label: "Daily Cases",
              backgroundColor: "rgb(255,0,0)",
            },
          ],
        }}
      />
    </>
  ) : null;

  const barChart2 = mainContext.globalData.deaths ? (
    <>
      <Bar
        options={optionsBar}
        data={{
          labels: Object.keys(mainContext.globalData.deaths).map(
            (date) => date
          ),
          datasets: [
            {
              data: Object.entries(mainContext.globalData.deaths).map(
                (value, index, array) =>
                  // @ts-ignore
                  value[1] - (index > 0 && array[index - 1][1])
              ),
              label: "Daily Deaths",
              backgroundColor: "rgb(255,0,0)",
            },
          ],
        }}
      />
    </>
  ) : null;
  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Global Data
      </Typography>
      {mainContext.globalChart === "Data"
        ? lineChart
        : mainContext.globalChart === "Cases"
        ? barChart
        : mainContext.globalChart === "Deaths"
        ? barChart2
        : null}
    </div>
  );
};
