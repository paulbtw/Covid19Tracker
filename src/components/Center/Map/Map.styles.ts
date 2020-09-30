import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltip: {
      position: "absolute",
      margin: "8px",
      padding: 5,
      backgroundColor: "#363636",
      opacity: 0.9,
      color: "#fff",
      maxWidth: "350px",
      fontSize: "1rem",
      zIndex: 9,
      pointerEvents: "none",
      borderRadius: 5,
    },
    tooltipTitle: {
      fontSize: "1.15rem",
    },
    cases: {
      color: "rgb(14, 97, 206)",
    },
    deaths: {
      color: "rgb(206,50,14)",
    },
    recovered: {
      color: "rgb(0, 255, 0)",
    },
  })
);

export const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "cases",
      stops: [
        [0, "#94C9BC"],
        [500, "#CFE5BC"],
        [1000, "#FFFFCE"],
        [5000, "#FFEDA0"],
        [10000, "#FED976"],
        [50000, "#FEB24C"],
        [100000, "#FD8D3C"],
        [500000, "#FC4E2A"],
        [2000000, "#E31A1C"],
      ],
    },
    "fill-opacity": 0.7,
  },
};
