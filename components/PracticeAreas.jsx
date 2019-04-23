import React from "react";
import styled from "styled-components";

const Icon = styled.img({
  height: "65px"
});

const ListItem = styled.div({
  display: "flex",
  alignItems: "center",
  margin: "2rem 0"
});

const ItemText = styled.p({
  margin: "0 1rem"
});

const PracticeAreas = () => {
  return (
    <React.Fragment>
      <ListItem>
        <Icon src={require("file-loader!../assets/icons/iconMobileWeb.svg")} />
        <ItemText>Web + Mobile</ItemText>
      </ListItem>
      <ListItem>
        <Icon
          src={require("file-loader!../assets/icons/iconRealTimeData.svg")}
        />
        <ItemText>Real-Time Data</ItemText>
      </ListItem>
      <ListItem>
        <Icon src={require("file-loader!../assets/icons/iconModernAPIs.svg")} />
        <ItemText>Modern APIs</ItemText>
      </ListItem>
      <ListItem>
        <Icon
          src={require("file-loader!../assets/icons/iconCloudEngineering.svg")}
        />
        <ItemText>Cloud Engineering</ItemText>
      </ListItem>
    </React.Fragment>
  );
};

export default PracticeAreas;
