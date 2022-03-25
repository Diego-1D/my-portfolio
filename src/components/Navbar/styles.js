import styled from 'styled-components';
import {theme} from '../theme/theme';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export const Container = styled.nav`
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.darkblue};
    color: ${theme.defaultWhite};
    border-bottom: 2px solid #151D34;
    z-index: 999;
`;

export const Name = styled.span`
    font-size: 1.2em;
`;

export const Header = styled.div`
    display: block;

    @media screen and (max-width: 769px){
        display: none;
    }
`;

export const HeaderOption = styled.span`
    padding: 0 1.2rem;
    font-size: 1em;

    &:hover{
        color: ${theme.defaultRed};
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const OpenMenu = styled(AiOutlineMenu)`
    width: 25px;
    height: 25px;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 769px){
        display: block;
    }
`;

export const CloseMenu = styled(AiOutlineClose)`
    width: 25px;
    height: 25px;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 769px){
        display: block;
    }
`;