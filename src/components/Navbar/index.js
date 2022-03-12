import React from "react";
import { Link } from 'react-scroll';
import {
  Container,
  Name,
  Header,
  HeaderOption
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Name>Diego <span style={{ color: '#F8032D' }}>Fernandes</span></Name>
      <Header>
        <Link to='hero' smooth={true} duration={1000}>
          <HeaderOption>Home</HeaderOption>
        </Link>
        <Link to='about' smooth={true} duration={1000}>
          <HeaderOption>Sobre</HeaderOption>
        </Link>
        <Link to='portfolio' smooth={true} duration={1000}>
          <HeaderOption>Portfólio</HeaderOption>
        </Link>
        <Link to='skills' smooth={true} duration={1000}>
          <HeaderOption>Skills</HeaderOption>
        </Link>
      </Header>
    </Container>
  )
}

export default Navbar;