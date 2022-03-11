import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1.5rem 5rem;
    display: flex;
    flex-direction: column;
    background: #161E35;
    letter-spacing: 1px;
    gap: 1rem;
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
    gap: 3rem;
`;

export const Card = styled.div`
    width: 300px;
    height: 260px;
    display: flex;
    flex-direction: column;
`;

export const Imagem =  styled.img`
    width: 100%;
    height: 200px;
    border-radius: 3px;
`;

export const Name = styled.h5`
    font-size: 20px;
    font-weight: 300;
    color: #ACABBD;
`;

export const TechnologiesUsedArea = styled.div`
    display: flex;
    gap: 1rem;
`;

export const TechnologiesUsed = styled.img`
    width: 15px;
    object-fit: cover;
`;