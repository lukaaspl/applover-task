import React, { useState, useEffect } from "react";
import { StyledWrapper, LinkButton } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";
import OrganizationDetails from "../../components/OrganizationDetails/";
import getOrganizationDetails from "../../helpers/getOrganizationDetails";

const Organization = () => {
  const [organizationShown, setOrganizationShown] = useState(false);
  const [organizationDetails, setOrganizationDetails] = useState(null);

  useEffect(() => {
    getOrganizationDetails()
      .then(response => setOrganizationDetails(JSON.parse(response)))
      .catch(error => setOrganizationDetails(false));
  }, []);

  return (
    <LanguageConsumer>
      {({ translation }) => (
        <StyledWrapper>
          <LinkButton onClick={() => setOrganizationShown(!organizationShown)}>
            {translation.global.organizationButtonLabel}
          </LinkButton>
          <OrganizationDetails
            isShown={organizationShown}
            details={organizationDetails}
          />
        </StyledWrapper>
      )}
    </LanguageConsumer>
  );
};

export default Organization;
