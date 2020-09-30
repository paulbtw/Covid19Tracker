import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { MainContext } from "../../../context/main.context";
import { useStyles } from "./Movement.styles";

interface MovementProps {}

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

export const Movement: React.FC<MovementProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);

  const lineChart = mainContext.movementData.data.length ? (
    <>
      <Typography variant="h4" className={classes.title}>
        This is the data for: {mainContext.selected}
      </Typography>
      <Line
        options={options}
        data={{
          labels: mainContext.movementData.data.map((value) => value.date),
          datasets: [
            {
              data: mainContext.movementData.data.map((value) => value.driving),
              label: "Driving",
              borderColor: "#3333ff",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
            {
              data: mainContext.movementData.data.map((value) => value.transit),
              label: "Transit",
              borderColor: "red",
              //backgroundColor: "rgba(255,0,0, 0,5)",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
            {
              data: mainContext.movementData.data.map((value) => value.walking),
              label: "Walking",
              borderColor: "green",
              fill: true,
              //pointRadius: 1,
              pointBorderColor: "rgba(0,0,0,0)",
            },
          ],
        }}
      />
    </>
  ) : null;
  return <>{lineChart}</>;
};
