import React from 'react';
import Profile from '../../Images/profile.svg';
import {
    Container,
    Wrapper,
    InfoArea,
    Text,
    TextSpan,
    Description,
    HireButton,
    ImageArea,
    ImageProfile,
} from './styles';

const Hero = () => {
    return (
        <Container id='hero'>
            <Wrapper>
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
                    <ImageProfile src={Profile} />
                </ImageArea>
            </Wrapper>
        </Container>
    )
}

export default Hero;