import React from "react";
import { Link } from "react-router-dom";
import { StyledWrapper, InnerWrapper, HeartLogo } from "./style.js";
import logo from "../../assets/logo.png";
import LanguageForm from "../../containers/LanguageForm/";

const Navbar = () => {
  return (
    <StyledWrapper>
      <InnerWrapper>
        <Link to="/">
          <HeartLogo src={logo} alt="AppLover" />
        </Link>
        <LanguageForm />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
