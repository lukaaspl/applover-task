import React from "react";
import { Link } from "react-router-dom";
import { StyledWrapper, InnerWrapper, NavWrapper } from "./style.js";
import logo from "../../assets/logo.png";
import LanguageForm from "../../containers/LanguageForm/";
import Organization from "../../containers/Organization/";
import { UserConsumer } from "../../contexts/UserContext";

const Navbar = () => {
  return (
    <UserConsumer>
      {({ userLogged }) => (
        <StyledWrapper>
          <InnerWrapper>
            <Link to="/">
              <img src={logo} alt="AppLover" />
            </Link>
            <NavWrapper>
              <LanguageForm />
              {userLogged && <Organization />}
            </NavWrapper>
          </InnerWrapper>
        </StyledWrapper>
      )}
    </UserConsumer>
  );
};

export default Navbar;
