import styled from 'styled-components';
import { theme } from '../theme/theme';

export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 4.5rem 1.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
`;

export const ImageArea = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const ImageProfile = styled.img`
    width: 310px;
    height: 400px;

    @media screen and (max-width: 820px){
        width: 250px;
        height: 330px;
    }
`;

export const InfoArea = styled.div`
    width: 55%;
    text-align: justify;
    letter-spacing: 1px;

    @media screen and (max-width: 820px){
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: ${theme.defaultWhite};
    text-decoration: underline;
    text-decoration-color: #F8032D;
    line-height: 2.5rem;
`;

export const InfoSubTitle = styled.div`
    margin-top: 1.2rem;
    font-size: 1.2em;
    letter-spacing: 1px;
    line-height: 2.2rem;
`;

export const SubTitle = styled.h5`
    font-weight: 300;
    color: ${theme.defaultWhite};
`;

export const Info = styled.span`
    color: ${theme.defaultGrey};
`;
