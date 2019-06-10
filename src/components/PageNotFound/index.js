import React from "react";
import { LanguageConsumer } from "../../contexts/LanguageContext";
import { Header, LinkButton, StyledWrapper } from "./style";

const PageNotFound = () => (
  <LanguageConsumer>
    {({ translation }) => (
      <StyledWrapper>
        <Header>{translation.pageNotFound.title}</Header>
        <LinkButton to="/">{translation.pageNotFound.buttonLabel}</LinkButton>
      </StyledWrapper>
    )}
  </LanguageConsumer>
);

export default PageNotFound;
