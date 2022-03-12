import styled from 'styled-components'

export const Container = styled.nav`
    height: 5rem;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E6E7F4;
`;

export const Name = styled.span`
    font-size: 1.2rem;
`;

export const Header = styled.div`
    display: flex;
`;

export const HeaderOption = styled.span`
    padding: 0 1.2rem;
    font-size: 1rem;

    &:hover{
        color: #F8032D;
        text-decoration: underline;
        cursor: pointer;
    }
`;
