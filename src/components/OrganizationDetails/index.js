import React, { useContext } from "react";
import { StyledWrapper, DetailsList, loaderStyles } from "./style";
import { ClipLoader } from "react-spinners";
import { LanguageContext } from "../../contexts/LanguageContext";

const OrganizationDetails = ({ isShown, details }) => {
  const { translation } = useContext(LanguageContext);
  let detailsDisplay = null;

  if (details) {
    detailsDisplay = (
      <>
        <li>
          {translation.organization.nameLabel}: {details.name}
        </li>
        <li>
          {translation.organization.emailAddressLabel}: {details.email}
        </li>
        <li>
          {translation.organization.phoneNumberLabel}: {details.phone_number}
        </li>
        <li>
          {translation.organization.addressLine1Label}: {details.address_line_1}
        </li>
        <li>
          {translation.organization.addressLine2Label}: {details.address_line_2 || "-"}
        </li>
        <li>
          {translation.organization.cityLabel}: {details.city}
        </li>
        <li>
          {translation.organization.postalCodeLabel}: {details.postal_code}
        </li>
      </>
    );
  }

  return (
    <StyledWrapper visible={isShown} id="organization-details">
      <ClipLoader color={"#77779d"} loading={!details} css={loaderStyles} size={50} sizeUnit={"px"} />
      <DetailsList>{detailsDisplay}</DetailsList>
    </StyledWrapper>
  );
};

export default OrganizationDetails;
