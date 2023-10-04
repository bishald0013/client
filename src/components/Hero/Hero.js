import React from 'react';
import { Container } from '../../global-styles';
import { HeroSection, HeroContainer } from './Style';
import Content from '../Content/Content';



const Hero = () => {
  return (
    <HeroSection id='hero'>
        <HeroContainer>
            <Container mt='5'>
                <Content/>
            </Container>
        </HeroContainer>
    </HeroSection>
  )
}

export default Hero
