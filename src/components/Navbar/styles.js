import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    height: 4rem;
    padding: 2rem 5rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E6E7F4;
    border-bottom: 2px solid #151D34;
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
