import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";

import Battle from "./screens/Battle";
import store from "./store";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
});

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Grid container spacing={2}>
              <Battle />
            </Grid>
          </Container>
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default App;
