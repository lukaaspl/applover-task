import React, { Component } from "react";
import { LoadingOverlay, Label, LoadingBar, LoadingProgressBar, LoadingProgressPercent } from "./style";

import { LanguageConsumer } from "../../contexts/LanguageContext";
import { UserContext } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPercent: 0
    };

    this.loadingInterval = null;
    this.loadingTimeout = null;
    this.setLoadingScreen = this.props.setLoadingScreen;
    this.setLoaded = this.props.setLoaded;
  }

  componentDidUpdate({ visible: isAlreadyVisible }) {
    if (isAlreadyVisible || this.props.loaded) return false;

    this.loadingInterval = setInterval(() => {
      this.setState(({ loadingPercent: prevLoadingPercent }) => {
        if (prevLoadingPercent === 99) {
          clearInterval(this.loadingInterval);
          this.setLoaded(true);
          this.context.userLogin(this.props.keepUserLogged);
          return { loadingPercent: prevLoadingPercent + 1 };
        }

        return {
          loadingPercent: prevLoadingPercent + 1
        };
      });
    }, 20);
  }

  componentWillUnmount() {
    if (this.loadingInterval) clearInterval(this.loadingInterval);
    if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
  }

  render() {
    if (this.props.loaded) {
      this.setLoadingScreen(false);
      return <Redirect to="/" />;
    }
    const { loadingPercent } = this.state;
    return (
      <LanguageConsumer>
        {({ translation }) => (
          <LoadingOverlay visible={this.props.visible}>
            <Label>{translation.loginForm.loadingLabel}</Label>
            <LoadingBar>
              <LoadingProgressBar progress={loadingPercent} />
              <LoadingProgressPercent isWhite={loadingPercent < 96}>{loadingPercent}%</LoadingProgressPercent>
            </LoadingBar>
          </LoadingOverlay>
        )}
      </LanguageConsumer>
    );
  }
}

LoadingScreen.contextType = UserContext;

export default LoadingScreen;
