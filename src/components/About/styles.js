import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 4.5rem 1.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around ;
`;

export const AreaImage = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageProfile = styled.img`
     width: 350px;
    object-fit: cover;

    @media screen and (max-width: 669px){
        width: 250px;
    }
`;

export const InfoArea = styled.div`
    width: 55%;
    text-align: justify;
    letter-spacing: 1px;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: #E6E7F4;
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
    color: #E6E7F4;
`;

export const Info = styled.span`
    color: #ACABBD;
`;
