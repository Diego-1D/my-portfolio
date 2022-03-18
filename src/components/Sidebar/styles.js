import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.aside`
    width: auto;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 4rem;
    margin-right: 5rem;
    width: 13rem;
    height: 13rem;
    display: none;
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
        background-color: #F8032D;
        transition: 0.3s ease-in;
    }
`;