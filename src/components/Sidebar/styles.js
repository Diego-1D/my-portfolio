import styled from 'styled-components';
import { Link } from 'react-scroll';
import { theme } from '../theme/theme';

export const Container = styled.aside`
    width: auto;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 4rem;
    width: 13rem;
    height: 13rem;
    display: none;
    background: ${theme.darkblue};
    @media screen and (max-width: 769px){
        display:${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    } 
`;

export const SidebarMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SidebarLink = styled(Link)`
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in;
    cursor: pointer;

    &:hover{
        background-color: ${theme.defaultRed};
        transition: 0.3s ease-in;
    }
`;