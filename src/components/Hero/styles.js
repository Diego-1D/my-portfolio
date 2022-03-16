import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5rem;
    color: #ACABBD;
`;

export const InfoArea = styled.div`
    letter-spacing: 1px;
`;

export const Text = styled.p`
    font-size: 30px;
    font-weight: bold;
    line-height: 3.2rem;
`;

export const TextSpan = styled.span`
    color: #E6E7F4;
    font-size: 42px;
`;

export const Description = styled.p`
    font-size: 14px;
    width: 35rem;
    margin: 1rem 0;
`;

export const HireButton = styled.button`
    width: 180px;
    height: 45px;
    border: none;
    border-radius: 20px;
    background: #A41831;
    font-size: 0.895rem;
    font-weight: bold;
    color: #E6E7F4;
    letter-spacing: 1px;
`;

export const ImageArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const ImageProfile = styled.img`
    width: 350px;
    object-fit: cover;
`;