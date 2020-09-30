import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      height: "100%",
      backgroundColor: "rgb(15,15,15)",
      flexGrow: 1,
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    loader: {
      margin: "auto",
    },
    grid: {
      marginLeft: "15px !important",
      marginRight: "15px !important",
    },
    loadingDiv: {
      width: "30%",
      justifyContent: "center",
      margin: "auto",
      paddingTop: "100px",
    },
  })
);
