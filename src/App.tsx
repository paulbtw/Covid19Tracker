import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./App.styles";
import { Main } from "./views";
import MainContextProvider from "./context/main.context";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MainContextProvider>
        <Main />
      </MainContextProvider>
    </div>
  );
}

export default App;
