import React from "react";
import {
  MainContent,
  TextContainer,
  Title,
  Description,
  ActionButton,
  ImageContainer,
  AnimatedGif,
} from "./Style";
import myGif from "../../assets/svg/image1.gif";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <MainContent>
      <TextContainer>
        <Title>Rely on us and Relax</Title>
        <Description>
          Welcome to <b>Rely N Relax</b>. The platform that provides you
          reminder for the important dates like vehicle's <b>PUCC</b> expiry,
          <b>Fitness</b> expiry, <b>RC</b> expiry and many more <b>....</b>
        </Description>
        <Link to="/register">
          <ActionButton>Sign Up Free</ActionButton>
        </Link>
      </TextContainer>
      <ImageContainer>
        <AnimatedGif src={myGif} alt="Animated GIF" />
      </ImageContainer>
    </MainContent>
  );
};

export default Content;
