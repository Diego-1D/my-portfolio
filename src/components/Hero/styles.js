import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 6rem;
    color: #ACABBD;
`;

export const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const InfoArea = styled.div`
    flex: 1;
    letter-spacing: 1px;
`;

export const Text = styled.label`
    font-size: 2em;
    font-weight: bold;
    line-height: 3rem;
`;

export const TextSpan = styled.strong`
    color: #E6E7F4;
    font-size: 1.2em;
`;

export const Description = styled.p`
    font-size: 1em;
    width: 35rem;
    margin: 1.2rem 0;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`;

export const HireButton = styled.button`
    width: 180px;
    height: 45px;
    border: none;
    border-radius: 20px;
    background: #A41831;
    font-size: 0.895em;
    font-weight: bold;
    color: #E6E7F4;
    letter-spacing: 1px;
`;

export const ImageArea = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const ImageProfile = styled.img`
    width: 350px;
    object-fit: cover;

    @media screen and (max-width: 1100px){
        width: 250px;
    }
`;