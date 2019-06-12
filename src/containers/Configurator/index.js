import React, { Component } from "react";
import { UserConsumer } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";
import { StyledWrapper, InnerWrapper } from "./style";
import StepsList from "../../components/StepsList/";
import Renderer from "../../containers/Renderer/";
import ConfiguratorForm from "../../containers/ConfiguratorForm/";

const stepsNumber = 3;

class Configurator extends Component {
  state = {
    step: 1
  };

  handleNextStep = () =>
    this.setState(previousState => ({
      step: previousState.step + 1
    }));

  handlePreviousStep = () =>
    this.setState(previousState => ({
      step: previousState.step - 1
    }));

  render() {
    const { step } = this.state;

    return (
      <UserConsumer>
        {({ userLogged }) => {
          if (!userLogged) return <Redirect to="/login" />;

          return (
            <StyledWrapper>
              <StepsList step={step} />
              <InnerWrapper>
                <Renderer />
                <ConfiguratorForm
                  step={step}
                  stepsNumber={stepsNumber}
                  nextStep={this.handleNextStep}
                  previousStep={this.handlePreviousStep}
                  setModal={this.props.setModal}
                />
              </InnerWrapper>
            </StyledWrapper>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Configurator;
