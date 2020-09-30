import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      margin: "0 0",
      border: "1px solid rgba(88, 88, 88, 0.5)",
      borderRadius: "0",
      backgroundColor: "rgb(33, 33, 33)",
      color: "rgb(200, 200, 200)",
      padding: "5px",
    },
    cardcontent: {
      padding: "10px !important",
      paddingBottom: "15px !important",
    },
    title: {
      color: "rgb(230,230,230)",
    },
    valueTotal: {
      fontWeight: "bold",
      lineHeight: "1",
      fontSize: "3rem",
    },
    value: {
      fontWeight: "bold",
      lineHeight: "1",
      fontSize: "1.75rem",
    },
    change: {
      margin: "0",
      lineHeight: "1",
      fontSize: "1.25rem",
    },
    cases: {
      borderTop: "10px solid rgba(14, 97, 206, 0.5)",
    },
    recovered: {
      borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
    },
    deaths: {
      borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
    },
    changer: {
      display: "flex",
      justifyContent: "left",
      width: "90%",
      borderLeft: "1px solid rgba(88, 88, 88, 0.5)",
      borderRight: "1px solid rgba(88, 88, 88, 0.5)",
      borderBottom: "1px solid rgba(88, 88, 88, 0.5)",
      //heigth: "2vh",
      cursor: "pointer",
      color: "rgb(200,200,200)",
      marginBottom: "0",
      backgroundColor: "rgb(33,33,33)",
    },
    changerValue: {
      textAlign: "center",
      fontSize: "1rem",
      width: "100%",
      height: "100%",
    },
    active: {
      backgroundColor: "rgb(111,111,111)",
    },
  })
);
