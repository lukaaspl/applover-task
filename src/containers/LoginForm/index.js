import React from "react";
import * as Styled from "./style";

const LoginForm = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Log in</Styled.Title>
      <form>
        <Styled.Input type="text" placeholder="E-mail address" />
        <Styled.Input type="password" placeholder="Password" />
        <Styled.CheckboxContainer>
          Keep me logged in
          <input type="checkbox" />
          <Styled.Checkbox />
        </Styled.CheckboxContainer>
        <Styled.Button type="submit">Login</Styled.Button>
      </form>
    </Styled.Wrapper>
  );
};

export default LoginForm;
