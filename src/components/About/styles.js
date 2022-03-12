import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    gap: 5rem;
`;

export const ImageArea = styled.div``;

export const ImageProfile = styled.img`
    width: 350px;
    object-fit: cover;
`;

export const InfoArea = styled.div`
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

export const SubTitle = styled.h5`
    font-size: 16px;
    font-weight: 300;
    color: #E6E7F4;
    line-height: 2.5rem;
`;

export const Info = styled.span`
    width: 44rem;
    font-size: 16px;
    color: #ACABBD;
`;
