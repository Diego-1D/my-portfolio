import React from 'react';
import ImgProfile from '../../Images/profileII.png';
import {
  Container,
  Wrapper,
  ImageArea,
  ImageProfile,
  InfoArea,
  Title,
  Info,
  InfoSubTitle,
  SubTitle
} from './styles';

const About = () => {
  return (
    <Container id='about'>
      <Wrapper>
        <ImageArea>
          <ImageProfile src={ImgProfile} />
        </ImageArea>
        <InfoArea>
          <Title>Sobre mim</Title>
          <Info>
            Profissional formado na área de Sistemas de Informação, com experiência na área de desenvolvimento de Front-End para aplicações Web.
            Atualmente, possuo pequenos projetos realizados com desenvolvimento utilizando principalmente: ReactJs, Firebase, Frameworks para CSS,
            como Styled-Components e Ant Design, além do próprio CSS.<br />
            Como desenvolvedor, sempre busco novas formas e métodos para criações de interfaces, não se limitando as tecnologias, possuindo
            facilidade de aprender novas tecnologias.
          </Info>
          <InfoSubTitle>
            <SubTitle>Nome: <Info>Diego Fernandes Andrade</Info></SubTitle>
            <SubTitle>Idade: <Info>23 anos</Info></SubTitle>
            <SubTitle>Contato: <Info>(93) 99231-5428 / (93) 98400-0895</Info></SubTitle>
            <SubTitle>E-mail: <Info>diego1d_fernandes@outlook.com</Info></SubTitle>
            <SubTitle>LinkedIn: <Info>https://www.linkedin.com/in/diego-fernandes-dev</Info></SubTitle>
            <SubTitle>GitHub: <Info>https://github.com/Diego-1D</Info></SubTitle>
          </InfoSubTitle>
        </InfoArea>
      </Wrapper>
    </Container>
  )
}

export default About;