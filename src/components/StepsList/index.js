import React from "react";
import { StyledWrapper, Connector, CircleWrapper, Circle, Description } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

const StepsList = ({ step }) => {
  return (
    <LanguageConsumer>
      {({ translation }) => (
        <StyledWrapper>
          <Connector />
          <CircleWrapper>
            <Circle active={step === 1} />
            <Description>
              {translation.configurator.stepLabel} 1<br />
              {translation.configurator.chooseDoorLabel}
            </Description>
          </CircleWrapper>

          <CircleWrapper>
            <Circle active={step === 2} />
            <Description>
              {translation.configurator.stepLabel} 2<br />
              {translation.configurator.chooseDoorDivisionLabel}
            </Description>
          </CircleWrapper>

          <CircleWrapper>
            <Circle active={step === 3} />
            <Description>
              {translation.configurator.stepLabel} 3<br />
              {translation.configurator.chooseColorLabel}
            </Description>
          </CircleWrapper>
        </StyledWrapper>
      )}
    </LanguageConsumer>
  );
};

export default StepsList;
