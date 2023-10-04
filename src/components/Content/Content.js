import React from 'react';
import { MainContent, TextContainer, Title, Description, ActionButton, ImageContainer, AnimatedGif } from './Style';
import myGif from '../../assets/svg/image1.gif';
import { Link } from 'react-router-dom';


const Content = () => {
  return (
      <MainContent>
          <TextContainer>
              <Title>Rely on us and Relax</Title>
              <Description>
                  Say hello to rely and relax — the platform that helps you build
                  customer relationships across <b>Pucc expiry date</b>,{' '}
                  <b>Fitness expiry date</b>, <b>RC expiry date</b>, and more.
              </Description>
              <Link to='/signup'>
                <ActionButton>Sign Up Free</ActionButton>
              </Link>
          </TextContainer>
          <ImageContainer>
              <AnimatedGif src={myGif} alt="Animated GIF" />
          </ImageContainer>
      </MainContent>
  )
}

export default Content
