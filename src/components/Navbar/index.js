import React from "react";
import {
  Container,
  Name,
  Header,
  HeaderOption
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Name>Diego Fernandes</Name>
      <Header>
        <HeaderOption>Home</HeaderOption>
        <HeaderOption>Sobre</HeaderOption>
        <HeaderOption>Portfólio</HeaderOption>
        <HeaderOption>Skill</HeaderOption>
      </Header>
    </Container>
  )
}

export default Navbar;