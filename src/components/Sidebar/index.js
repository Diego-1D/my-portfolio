import React from 'react';
import { Container, SidebarMenu, SidebarLink } from './styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} toggle={toggle}>
            <SidebarMenu>
                <SidebarLink to='hero' smooth={true} duration={1000} onClick={toggle}>Home</SidebarLink>
                <SidebarLink to='about' smooth={true} duration={1000} onClick={toggle}>Sobre</SidebarLink>
                <SidebarLink to='portfolio' smooth={true} duration={1000} onClick={toggle}>Portfólio</SidebarLink>
                <SidebarLink to='skills' smooth={true} duration={1000} onClick={toggle}>Skills</SidebarLink>
            </SidebarMenu>
        </Container>
    )
}

export default Sidebar;