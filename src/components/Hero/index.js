import React from 'react';
import Profile from '../../Images/profile.svg';
import {
    Container,
    InfoArea,
   ImageArea,
    TextSpan,
    Text,
    Description,
    HireButton,
   ImageProfile
} from './styles';

const Hero = () => {
    return (
        <Container>
            <InfoArea>
                <Text>Olá, Eu sou um<br />
                    <TextSpan>Desenvolvedor Front-End</TextSpan>
                </Text>
                <Description>
                    Profissional formado na área de Sistemas de Informação, com experiência
                    na área de desenvolvimento de Front-End para aplicações Web.
                </Description>
                <HireButton>Contrate-me</HireButton>
            </InfoArea>
            <ImageArea>
                    <ImageProfile src={Profile}/>
            </ImageArea>
        </Container>
    )
}

export default Hero;