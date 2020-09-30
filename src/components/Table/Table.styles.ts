import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "70.2vh",
      border: "1px solid rgba(88, 88, 88, 0.5)",
    },
    tableContainer: {
      paddingRight: "0px",
      height: "70vh",
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "rgb(111,111,111)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
    },
    table: {},
    tableHead: {
      color: "rgb(200,200,200)",
      backgroundColor: "rgb(111,111,111)",
      fontSize: "1rem",
      // fontWeight: "700",
      textAlign: "center",
      "&:first-child": {
        textAlign: "left",
        paddingLeft: "5px",
      },
    },
    tableCell: {
      color: "rgb(200,200,200)",
      fontSize: "1.1rem",
      paddingLeft: "5px",
    },
    tableCellFirst: {
      paddingTop: "5px !important",
      paddingBottom: "5px !important",
    },
    tableCellName: {
      // fontWeight: "700",
    },
    cellValue: {
      fontSize: "1.3rem",
      lineHeight: "1.3rem",
    },
    cellChange: {
      fontSize: "0.8rem",
      lineHeight: "0.8rem",
    },
    infected: {
      color: "rgb(14,97,206)",
    },
    deaths: {
      color: "rgb(206,50,14)",
    },
    active: {
      backgroundColor: "rgb(111,111,111)",
    },
    tableRow: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(111,111,111)",
      },
    },
    root: {
      width: "100%",
    },
    tableChanger: {
      width: "90%",
      borderLeft: "1px solid rgba(88, 88, 88, 0.5)",
      borderRight: "1px solid rgba(88, 88, 88, 0.5)",
      borderBottom: "1px solid rgba(88, 88, 88, 0.5)",
      color: "rgb(200,200,200)",
      cursor: "pointer",
      marginBottom: "0px",
      //height: "2.75vh",
    },
    tableChangerValue: {
      textAlign: "center",
      fontSize: "1rem",
      width: "100%",
      height: "100%",
    },
  })
);
