import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      //height: "70vh",
      border: "1px solid rgba(88, 88, 88, 0.5)",
    },
    centerChanger: {
      width: "90%",
      borderLeft: "1px solid rgba(88, 88, 88, 0.5)",
      borderRight: "1px solid rgba(88, 88, 88, 0.5)",
      borderTop: "1px solid rgba(88, 88, 88, 0.5)",
      color: "rgb(200,200,200)",
      cursor: "pointer",
      marginBottom: "0px",
      //height: "3.5vh",
    },
    centerChangerValue: {
      textAlign: "center",
      fontSize: "1.25rem",
      width: "100%",
      height: "100%",
    },
    active: {
      backgroundColor: "rgb(111,111,111)",
    },
  })
);
