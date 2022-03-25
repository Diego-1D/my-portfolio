import styled from 'styled-components';
import { theme } from '../theme/theme';

export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 4.5rem 1.5rem;
    letter-spacing: 1px;
`;

export const Title = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: ${theme.defaultWhite};
    text-decoration: underline;
    text-decoration-color: ${theme.defaultRed};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 1.2rem;
    margin: 0 auto;

`;

export const Card = styled.div`
    flex: 1 1 300px;
    margin: 15px;
   
        &:hover{
        border: 2px solid #F8032D;
        cursor: pointer;
    } 
       
`;

export const Imagem =  styled.img`
    max-width: 100%;
    display: block;
    border-radius: 3px;
`;

export const Name = styled.h5`
    font-size: 1.2em;
    font-weight: 300;
    color: ${theme.defaultGrey};
`;

export const TechnologiesUsedArea = styled.div`
    display: flex;
    gap: 1rem;
`;

export const TechnologiesUsed = styled.img`
    width: 17px;
    filter: grayscale(1);
    background-color: transparent;
`;

