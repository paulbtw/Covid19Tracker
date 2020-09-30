import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: "rgb(230,230,230)",
      fontWeight: "bold",
      textAlign: "center",
      margin: "5px 0",
    },
  })
);
