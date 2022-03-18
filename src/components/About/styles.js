import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 4.5rem 5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`;

export const AreaImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const ImageProfile = styled.img`
    max-width: 100%;
    max-height: 420px;
`;

export const InfoArea = styled.div`
    width: 57%;
    text-align: justify;
    letter-spacing: 1px;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
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
