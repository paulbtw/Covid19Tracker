import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  container: {
    display: "flex",
    height: "5vh",
    backgroundColor: "rgb(33, 33, 33)",
    border: "1px solid rgba(88, 88, 88, 0.5)",

    marginTop: "0",
  },
  containerItem: {
    display: "flex",
    heigth: "100%",
    width: "33%",
    color: "rgb(230, 230, 230)",
    borderRight: "1px solid rgba(88, 88, 88, 0.5)",
    alignItems: "center",
    verticalAlign: "middle",
    "&:last-child": {
      borderRight: "0px",
    },
  },
  containerText: {
    fontSize: "1.5rem",
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
    "& a": {
      textDecoration: "none",
      color: "rgb(14, 97, 206)",
    },
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
