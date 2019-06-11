import React from "react";
import { StyledWrapper, loaderStyles } from "./style";
import { ClipLoader } from "react-spinners";

const OrganizationDetails = ({ isShown, details }) => {
  return (
    <StyledWrapper visible={isShown} id="organization-details">
      <ClipLoader
        color={"#77779d"}
        loading={!details}
        css={loaderStyles}
        size={50}
        sizeUnit={"px"}
      />
      {details && details.name}
    </StyledWrapper>
  );
};

export default OrganizationDetails;
