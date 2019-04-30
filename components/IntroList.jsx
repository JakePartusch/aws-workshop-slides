import React from "react";
import styled from "styled-components";

const ListItem = styled.div({
  display: "flex",
  alignItems: "center",
  marginLeft: "8rem"
});

const Icon = styled.img({
  height: "50px",
  width: "120px"
});

const ItemText = styled.p({
  margin: "1rem 1rem"
});

const Emoji = styled.div({
  width: "120px"
});

const SocialIcon = styled.img({
  height: "50px",
  margin: "5px"
});

const IntroList = () => (
  <>
    <ListItem>
      <Icon src={require("file-loader!../assets/intro/nebraska.svg")} />
      <ItemText>Omaha, NE</ItemText>
    </ListItem>
    <ListItem>
      <Emoji>👨🏻‍💻</Emoji>
      <ItemText>JavaScript Developer</ItemText>
    </ListItem>
    <ListItem>
      <SocialIcon
        src={require("file-loader!../assets/intro/twitter-blue.svg")}
      />
      <SocialIcon
        src={require("file-loader!../assets/intro/github-mark.png")}
      />
      <ItemText>@JakePartusch</ItemText>
    </ListItem>
  </>
);

export default IntroList;
