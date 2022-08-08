import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import DateFnsUtils from "@date-io/date-fns";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "styled-components/macro";
import { create } from "jss";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";

import createTheme from "./theme";
import Routes from "./routes/Routes";
import { Account } from "./pages/auth/Account";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

const queryClient = new QueryClient();

function App() {
  const theme = useSelector((state) => state.themeReducer);

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Helmet titleTemplate="%s | Protos Labs" />
        <StylesProvider jss={jss}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
              <ThemeProvider theme={createTheme(theme.currentTheme)}>
                <Account>
                  <Routes />
                </Account>
              </ThemeProvider>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
