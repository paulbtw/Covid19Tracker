import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      border: "1px solid rgba(88, 88, 88, 0.5)",
      marginTop: "15px",
      backgroundColor: "rgb(33, 33, 33)",
      padding: "10px",
      alignItems: "center",
      flexDirection: "column",
    },
    title: {
      fontSize: "20px !important",
      // fontWeight: "700",
      lineHeight: "1 !important",
      color: "rgb(200,200,200)",
    },
    value: {
      fontSize: "26px !important",
      lineHeight: "1 !important",
      // fontWeight: "700",
      color: "rgb(200,200,200)",
    },
  })
);
