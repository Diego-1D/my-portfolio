import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 4.5rem 5rem;
    display: flex;
    flex-direction: column;
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
    flex-wrap: wrap;
    max-width: 1200px;
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
    font-size: 18px;
    font-weight: 300;
    color: #ACABBD;
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

