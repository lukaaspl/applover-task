import React, { useState } from "react";
import * as Styled from "./style";
import LoginErrorAlert from "../../components/LoginErrorAlert";
import login from "../../helpers/login";

import { LanguageConsumer } from "../../contexts/LanguageContext";

const LoginForm = ({ captureLoginProcess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    setProcessing(true);

    const isLogged = await login(email, password);

    if (!isLogged) {
      setProcessing(false);
      setLoginError(true);
      return;
    }

    if (loginError) setLoginError(false);

    setProcessing(false);
    captureLoginProcess(keepLogged);
  };

  return (
    <LanguageConsumer>
      {({ translation }) => (
        <Styled.Wrapper>
          <Styled.Title>{translation.loginForm.title}</Styled.Title>
          <form>
            <Styled.Input
              type="email"
              placeholder={translation.loginForm.emailPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Styled.Input
              type="password"
              placeholder={translation.loginForm.passwordPlaceholder}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Styled.CheckboxContainer>
              {translation.loginForm.keepLoggedLabel}
              <input
                type="checkbox"
                checked={keepLogged}
                onChange={() => setKeepLogged(!keepLogged)}
              />
              <Styled.Checkbox />
            </Styled.CheckboxContainer>
            <Styled.Button
              type="submit"
              onClick={handleLogin}
              disabled={processing}
            >
              {processing
                ? translation.loginForm.loadingLabel
                : translation.loginForm.submitButtonLabel}
            </Styled.Button>
            <LoginErrorAlert
              visible={loginError}
              closeAlert={() => setLoginError(false)}
            />
          </form>
        </Styled.Wrapper>
      )}
    </LanguageConsumer>
  );
};

export default LoginForm;
