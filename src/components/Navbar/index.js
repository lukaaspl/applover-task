import React from "react";
import { Link } from "react-router-dom";
import { StyledWrapper, InnerWrapper } from "./style.js";
import logo from "../../assets/logo.png";
import LanguageForm from "../../containers/LanguageForm/";

const Navbar = () => {
  return (
    <StyledWrapper>
      <InnerWrapper>
        <Link to="/">
          <img src={logo} alt="AppLover" />
        </Link>
        <LanguageForm />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
