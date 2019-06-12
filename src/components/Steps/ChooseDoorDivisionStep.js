import React from "react";
import { StepTitle, CounterContainer } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

const ChooseDoorDivisionStep = ({ configuratorState, update }) => {
  const { beamsNumber, postsNumber } = configuratorState;

  return (
    <LanguageConsumer>
      {({ translation }) => (
        <>
          <StepTitle>{translation.configurator.doorDivisionLabel}</StepTitle>
          <CounterContainer>
            <label htmlFor="beamsNumber">{translation.configurator.numberOfBeamsLabel}</label>
            <input type="text" id="beamsNumber" value={beamsNumber} readOnly />
            <button type="button" data-property="beamsNumber" onClick={update}>
              +
            </button>
            <button type="button" data-property="beamsNumber" onClick={update}>
              -
            </button>
          </CounterContainer>
          <CounterContainer>
            <label htmlFor="postsNumber">{translation.configurator.numberOfPostsLabel}</label>
            <input type="text" id="postsNumber" value={postsNumber} readOnly />
            <button type="button" data-property="postsNumber" onClick={update}>
              +
            </button>
            <button type="button" data-property="postsNumber" onClick={update}>
              -
            </button>
          </CounterContainer>
        </>
      )}
    </LanguageConsumer>
  );
};

export default ChooseDoorDivisionStep;
