import React, { Component } from "react";
import {
  LoadingOverlay,
  Label,
  LoadingBar,
  LoadingProgressBar,
  LoadingProgressPercent
} from "./style";

import { LanguageConsumer } from "../../contexts/LanguageContext";
import { UserContext } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPercent: 0,
      loaded: false
    };

    this.loadingInterval = null;
    this.loadingTimeout = null;
    this.setLoadingScreen = this.props.setLoadingScreen;
  }

  componentDidUpdate({ visible: isAlreadyVisible }) {
    if (isAlreadyVisible || this.state.loaded) return;

    this.loadingInterval = setInterval(() => {
      this.setState(({ loadingPercent: prevLoadingPercent }) => {
        if (prevLoadingPercent === 100) {
          clearInterval(this.loadingInterval);
          this.context.userLogin(this.props.keepUserLogged);
          return {
            loadingPercent: prevLoadingPercent + 1,
            loaded: true
          };
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
    if (this.state.loaded) {
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
              <LoadingProgressPercent isWhite={loadingPercent < 96}>
                {loadingPercent}%
              </LoadingProgressPercent>
            </LoadingBar>
          </LoadingOverlay>
        )}
      </LanguageConsumer>
    );
  }
}

LoadingScreen.contextType = UserContext;

export default LoadingScreen;
