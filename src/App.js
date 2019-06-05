import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import theme, { GlobalStyle } from "./layout/theme";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar/";
import LoginForm from "./containers/LoginForm/";

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <LoginForm />
      </>
    </ThemeProvider>
  </Router>
);

export default App;
