import React, { Component } from "react";
import ViewSelector from "../../components/ViewSelector/";
import { StyledWrapper } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

class Renderer extends Component {
  render() {
    return (
      <LanguageConsumer>
        {({ translation }) => (
          <StyledWrapper>
            <ViewSelector />
            {translation.configurator.rendererInBuilding}
          </StyledWrapper>
        )}
      </LanguageConsumer>
    );
  }
}

export default Renderer;
