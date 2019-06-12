import React from "react";
import styled from "styled-components";
import tipIcon from "../assets/tip-icon.svg";

const StyledTipIcon = styled.img`
  margin-left: 2px;
  vertical-align: 5px;
`;

const TipIcon = () => <StyledTipIcon src={tipIcon} alt="tip" />;

export default TipIcon;
