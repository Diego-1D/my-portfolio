import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    padding: 1.5rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    gap: 4rem;
    
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #E6E7F4;
    text-decoration: underline;
    text-decoration-color: #F8032D;
`;

export const Wrapper = styled.div`
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`;

export const AreaIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const TechnologiesIcon = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
    /* background-color: yellow; */
`;

export const TitleIcon = styled.h5`
    font-size: 16px;
    font-weight: bold;
    color: #E6E7F4;
    letter-spacing: 1px;
`;
