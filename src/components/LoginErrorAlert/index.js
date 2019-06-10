import React from "react";
import { Alert, CloseButton } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

const LoginErrorAlert = ({ visible, closeAlert }) => (
  <LanguageConsumer>
    {({ translation }) => (
      <Alert visible={visible}>
        {translation.loginForm.invalidCredentialsMessage}!
        <CloseButton onClick={closeAlert} />
      </Alert>
    )}
  </LanguageConsumer>
);

export default LoginErrorAlert;
