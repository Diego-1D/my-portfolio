import React, { useState } from "react";
import { Link } from 'react-scroll';
import Sidebar from "../Sidebar";
import {
  Container,
  Name,
  Header,
  HeaderOption,
  OpenMenu,
  CloseMenu
} from "./styles";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    setSelected(!isOpen);
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Name>Diego <span style={{ color: '#F8032D' }}>Fernandes</span></Name>
      {!selected ?
        <OpenMenu onClick={toggle} />
        :
        <CloseMenu onClick={toggle} />
      }
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