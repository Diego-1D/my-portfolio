import React from 'react';
import ImgProfile from '../../Images/profileII.png';
import {
  Container,
  ImageArea,
  ImageProfile,
  InfoArea,
  Title,
  Info,
  SubTitle
} from './styles';

const About = () => {
  return (
    <Container>
      <ImageArea>
        <ImageProfile src={ImgProfile}></ImageProfile>
      </ImageArea>
      <InfoArea>
        <Title>Sobre mim</Title>
        <Info>
          T extoco nte udotextoco nteudote xtoconteud otextoconteudoto nteudot extoc onteudo te xto conteudo.
          Textoconteudot ext oconteudo textoco nteudot ext oco nteu dotexto conteudotex tocon teud otex tocont
          eudotexto c onteudo textoc onteudo.
        </Info>
        <SubTitle>Nome: <Info>Diego Fernandes Andrade</Info></SubTitle>
        <SubTitle>Idade: <Info>23 anos</Info></SubTitle>
        <SubTitle>Contato: <Info>(93) 99231-5428 / (93) 98400-0895</Info></SubTitle>
        <SubTitle>E-mail: <Info>diego1d_fernandes@outlook.com</Info></SubTitle>
        <SubTitle>LinkedIn: <Info>https://www.linkedin.com/in/diego-fernandes-dev</Info></SubTitle>
        <SubTitle>GitHub: <Info>https://github.com/Diego-1D</Info></SubTitle>
      </InfoArea>
    </Container>
  )
}

export default About;