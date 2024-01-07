import styled from "styled-components";

export const RegFormContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 75px;
  background-color: #d4f5bb;
  border-radius: 5px 5px 3px 12rem;
  height: 70vh;
  padding-bottom: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px) {
    height: 30rem;
  }
`;

export const RegFormWrapper = styled.div`
  border-radius: 15px;
  margin: 0;
  margin-top: 5px;
  opacity: 0.9;
  box-shadow: 10px 5px #000;
  height: 85vh;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 960px) {
    width: 95vw;
    height: 80vh;
  }
`;

export const RegForm = styled.form`
  height: 80%;
  border: 1px solid black;
`;

export const Icon = styled.i`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 10px;
  z-index: 3;
  padding: 10px;
  @media screen and (max-width: 960px) {
    padding: 1px 5px;
  }
`;
