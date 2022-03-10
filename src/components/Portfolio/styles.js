import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
    height: 100vh;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    background: #161E35;
    letter-spacing: 1px;
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #E6E7F4;
    text-decoration: underline;
    text-decoration-color: #F8032D;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: cyan;
    gap: 3rem;
`;

export const Card = styled.div`
    width: 250px;
    height: 250px;
    background-color: yellow;
`;