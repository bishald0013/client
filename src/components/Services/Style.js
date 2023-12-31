import { styled } from "styled-components";

export const ServiceText = styled.div`
    
    @media screen and (max-width:960px) {
        margin: 6rem 0;
    }
`;

export const ServicesHeader = styled.h1`
    text-align: center;
    color: rgba(25, 135, 84, 1);
`;

export const ServiceDescription = styled.p`
    text-align: center;
`;

export const ServiceWrapper = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    @media screen and (max-width:960px) {
        flex-direction: column;
    }
`;


// service card

export const ServiceCardContent = styled.div`
    border: 1px solid black;
    width: 45%;
    height: 14rem;
    background-color: ${({bg}) => (bg ? bg : '#000')};
    border-radius: 1.8rem;
    border: none;
    padding: 2rem 1rem;
    display: flex;
    flex-wrap: nowrap;
    @media screen and (max-width:960px) {
        width: 100%;
    }
`;

export const ServiceCardIcon = styled.div`
    width: 200px;
`;

export const ServiceImg = styled.img`
    height: auto;
    width: 100%;
`;

export const ServiceCardDetails = styled.div`
    width: 70%;
`;

export const ServiceCardHeader = styled.div`
    font-weight: 700;
    margin: 1rem 0;
`;

export const ServiceCardDescription = styled.div``;

export const ServiceCardFooter = styled.div``;
