import React from "react";
import styled from "styled-components";

const HeadingIcon = styled.img({
  height: "70px"
});

const HeadingContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem 0"
});

const HeadingText = styled.h3({
  margin: "1rem",
  fontSize: "48px"
});

const PartnerLogo = styled.img({
  height: "60px",
  margin: "1rem"
});

const PartnerLogoContainer = styled.div({
  margin: "0.5rem 70px",
  display: "flex",
  alignItems: "center"
});

const Logos = styled.div({
  display: "flex",
  flexWrap: "wrap"
});

const Partnerships = () => (
  <React.Fragment>
    <HeadingContainer>
      <HeadingIcon
        src={require("file-loader!../assets/icons/partnerships.svg")}
      />
      <HeadingText>Partnerships</HeadingText>
    </HeadingContainer>
    <Logos>
      <PartnerLogoContainer>
        <PartnerLogo src={require("file-loader!../assets/partners/aws.svg")} />
      </PartnerLogoContainer>
      <PartnerLogoContainer>
        <PartnerLogo
          src={require("file-loader!../assets/partners/confluent.svg")}
        />
      </PartnerLogoContainer>
      <PartnerLogoContainer>
        <PartnerLogo
          src={require("file-loader!../assets/partners/github.png")}
        />
      </PartnerLogoContainer>
    </Logos>
  </React.Fragment>
);

export default Partnerships;
