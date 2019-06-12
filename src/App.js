import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme, { GlobalStyle, MainContainer } from "./layout/theme";

import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./contexts/LanguageContext";
import { UserProvider } from "./contexts/UserContext";

import Configurator from "./containers/Configurator/";
import Navbar from "./components/Navbar/";
import LoginForm from "./containers/LoginForm/";
import LoadingScreen from "./components/LoadingScreen";
import Modal from "./components/Modal/";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [keepUserLogged, setKeepUserLogged] = useState(false);
  const [modal, setModal] = useState(false);

  const captureLoginProcess = hasToRembemberUser => {
    setKeepUserLogged(hasToRembemberUser);
    setLoadingScreen(true);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <UserProvider>
            <GlobalStyle />
            <MainContainer blurred={loadingScreen || modal}>
              <Navbar />
              <Switch>
                <Route exact path="/" component={() => <Configurator setModal={setModal} />} />
                <Route path="/login" component={() => <LoginForm captureLoginProcess={captureLoginProcess} />} />
                <Route component={PageNotFound} />
              </Switch>
            </MainContainer>
            <LoadingScreen
              keepUserLogged={keepUserLogged}
              visible={loadingScreen}
              setLoadingScreen={setLoadingScreen}
              loaded={loaded}
              setLoaded={setLoaded}
            />
            <Modal content={modal} setModal={setModal} />
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
