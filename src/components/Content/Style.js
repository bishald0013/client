import styled from 'styled-components';
import { Button } from '../../global-styles';


export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1A5D1A;
   @media screen and (max-width:960px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width:310px) {
      font-size: 2rem;
    }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-family: 'Arvo', serif;
  color: #1A5D1A;
  margin-bottom: 2rem;
   @media screen and (max-width:960px) {
      font-size: 1rem;
    }
    @media screen and (max-width:310px) {
      font-size: .8rem;
    }
`;

export const ActionButton = styled(Button)`
  background-color: #343a40;
  border: none;
  padding: 10px 10px;
  font-size: 1.25rem;
  transition: all 0.6s ease;

  &:before{
    background: rgba(255, 255, 255,0.1);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    z-index: 1;
  }
  &:hover:before {
	  height: 100%;
    width: 100%;
  }
  &:hover {
    transform: translateX(-10px);
    box-shadow: 10px 5px #000;
  }
  @media screen and (max-width: 960px) {
    transform: translateX(-10px);
    box-shadow: 10px 5px #000;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const AnimatedGif = styled.img`
  max-width: 100%;
  height: auto;
`;





