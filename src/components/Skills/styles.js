import styled from 'styled-components';
import { theme } from '../theme/theme';

export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 4.5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 1px;
    gap: 3rem;
`;

export const Title = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: ${theme.defaultWhite};
    text-decoration: underline;
    text-decoration-color: ${theme.defaultRed};
`;

export const Wrapper = styled.div`
    width: 650px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 669px){
        width: 100%;
        flex-direction: column;
        gap: 3rem;
    }
`;

export const AreaIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TechnologiesIcon = styled.img`
    width: 4em;
    height: 4em;
    margin-bottom: 5px;
`;

export const TitleIcon = styled.h5`
    font-size: 1em;
    font-weight: bold;
    color: ${theme.defaultWhite};
    letter-spacing: 1px;
`;
