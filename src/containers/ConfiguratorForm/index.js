import React, { Component } from "react";
import { StyledWrapper, StyledForm, StepButtonContainer, StepButton } from "./style";
import ChooseDoorStep from "../../components/Steps/ChooseDoorStep";
import ChooseDoorDivisionStep from "../../components/Steps/ChooseDoorDivisionStep";
import ChooseColorStep from "../../components/Steps/ChooseColorStep";
import { LanguageConsumer } from "../../contexts/LanguageContext";

class ConfiguratorForm extends Component {
  state = {
    doorType: "single-door",
    doorWidth: 120,
    doorHeight: 250,
    doorColor: "black",
    beamsNumber: 4,
    postsNumber: 2
  };

  maxAmountOfBeamsAndPosts = 4;

  handleUpdate = e => {
    const stateProperty = e.target.id;
    const value = e.target.value;

    this.setState({
      [stateProperty]: value
    });
  };

  handleCounterUpdate = e => {
    const stateProperty = e.target.dataset.property;
    const action = e.target.textContent;

    if (action === "+" && this.state[stateProperty] < this.maxAmountOfBeamsAndPosts) {
      this.setState(previousState => ({
        [stateProperty]: previousState[stateProperty] + 1
      }));
    } else if (action === "-" && this.state[stateProperty] > 1) {
      this.setState(previousState => ({
        [stateProperty]: previousState[stateProperty] - 1
      }));
    }
  };

  renderStep = step => {
    if (step === 1) return <ChooseDoorStep configuratorState={this.state} update={this.handleUpdate} />;
    if (step === 2) return <ChooseColorStep configuratorState={this.state} update={this.handleUpdate} />;
    if (step === 3) return <ChooseDoorDivisionStep configuratorState={this.state} update={this.handleCounterUpdate} />;
    return null;
  };

  render() {
    const { step: currentStep, nextStep, previousStep, stepsNumber } = this.props;
    const renderedStep = this.renderStep(currentStep);

    return (
      <LanguageConsumer>
        {({ translation }) => (
          <StyledWrapper>
            <StyledForm>{renderedStep}</StyledForm>

            <StepButtonContainer>
              {currentStep > 1 && (
                <StepButton onClick={previousStep}>{translation.configurator.previousStepButtonLabel}</StepButton>
              )}
              {currentStep < stepsNumber && (
                <StepButton next onClick={nextStep}>
                  {translation.configurator.nextStepButtonLabel}
                </StepButton>
              )}
            </StepButtonContainer>
          </StyledWrapper>
        )}
      </LanguageConsumer>
    );
  }
}

export default ConfiguratorForm;
