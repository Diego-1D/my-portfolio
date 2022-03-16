import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    gap: 6rem;
`;

export const ImageArea = styled.div``;

export const ImageProfile = styled.img`
    width: 350px;
    object-fit: cover;
`;

export const InfoArea = styled.div`
    width: 43rem;
    text-align: justify;
    letter-spacing: 1px;
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #E6E7F4;
    text-decoration: underline;
    text-decoration-color: #F8032D;
    line-height: 2.5rem;
`;


export const InfoSubTitle = styled.div`
    margin-top: 1.2rem;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 2.2rem;
`;

export const SubTitle = styled.h5`
    font-weight: 300;
    color: #E6E7F4;
`;

export const Info = styled.span`
    color: #ACABBD;
`;
