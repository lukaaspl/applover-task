import React, { useContext } from "react";
import TipIcon from "../../components/TipIcon";
import { StepTitle, RadioContainer, InputContainer } from "./style";
import { ModalTitle, ModalWrapper, DoorType, Box } from "./modalStyle";
import { LanguageContext, LanguageConsumer } from "../../contexts/LanguageContext";

const ChooseDoorStep = ({ configuratorState, update, setModal }) => {
  const { doorType, doorWidth, doorHeight } = configuratorState;
  const { translation } = useContext(LanguageContext);
  const doorTypeModalContent = (
    <>
      <ModalTitle>{translation.configurator.doorTypeLabel}</ModalTitle>
      <ModalWrapper>
        <DoorType>
          <span>{translation.configurator.singleDoorLabel}</span>
          <Box />
        </DoorType>
        <DoorType>
          <span>{translation.configurator.doubleDoorLabel}</span>
          <Box />
        </DoorType>
      </ModalWrapper>
    </>
  );

  return (
    <LanguageConsumer>
      {({ translation }) => (
        <>
          <StepTitle>
            {translation.configurator.doorTypeLabel}
            <span onClick={() => setModal(doorTypeModalContent)}>
              <TipIcon />
            </span>
          </StepTitle>
          <RadioContainer>
            {translation.configurator.singleDoorLabel}
            <input
              type="radio"
              id="doorType"
              value="single-door"
              checked={doorType === "single-door"}
              onChange={update}
            />
            <span />
          </RadioContainer>

          <RadioContainer>
            {translation.configurator.doubleDoorLabel}
            <input
              type="radio"
              id="doorType"
              value="double-door"
              checked={doorType === "double-door"}
              onChange={update}
            />
            <span />
          </RadioContainer>

          <StepTitle next>{translation.configurator.doorSizeLabel}</StepTitle>
          <InputContainer>
            <label htmlFor="door-width">{translation.configurator.doorWidthLabel}</label>
            <input type="text" id="doorWidth" value={doorWidth} onChange={update} />
            cm
          </InputContainer>
          <InputContainer>
            <label htmlFor="door-height">{translation.configurator.doorHeightLabel}</label>
            <input type="text" id="doorHeight" value={doorHeight} onChange={update} />
            cm
          </InputContainer>
        </>
      )}
    </LanguageConsumer>
  );
};

export default ChooseDoorStep;
