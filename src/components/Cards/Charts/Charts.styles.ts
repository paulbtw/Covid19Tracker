import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      backgroundColor: "rgb(33,33,33)",
      border: "1px solid rgba(88,88,88,0.5)",
      paddingRight: "0",
      marginTop: "15px",
    },
    title: {
      fontSize: "1rem",
      color: "rgb(200,200,200)",
      fontWeight: "bold",
      textAlign: "center",
      margin: "5px 0",
    },
  })
);
