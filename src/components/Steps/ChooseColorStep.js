import React from "react";
import { StepTitle, RadioContainer, ColorContainer, ColorBox } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

const initialColors = [
  {
    name: "black",
    hex: "#000000"
  },
  {
    name: "gray",
    hex: "#797474"
  },
  {
    name: "white",
    hex: "#f4f2f2"
  }
];

const ChooseColorStep = ({ configuratorState, update }) => {
  const { doorColor } = configuratorState;

  const colors = initialColors.map(color => {
    const { name, hex } = color;
    const label = name.charAt(0).toUpperCase() + name.substr(1);

    return (
      <ColorContainer key={name}>
        <ColorBox color={hex} />
        <RadioContainer>
          {label}
          <input type="radio" id="doorColor" value={name} checked={doorColor === name} onChange={update} />
          <span />
        </RadioContainer>
      </ColorContainer>
    );
  });

  return (
    <LanguageConsumer>
      {({ translation }) => (
        <>
          <StepTitle>{translation.configurator.doorColorLabel}</StepTitle>
          {colors}
        </>
      )}
    </LanguageConsumer>
  );
};

export default ChooseColorStep;
