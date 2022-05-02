import React from 'react';
import { Container, Github, Text, Link, Linkedin, SocialMedia } from './styles';

const Footer = () => {
    return (
        <Container>
            <Text> Santarém - Pará </Text>2022
            <SocialMedia>
                <Link href='https://github.com/Diego-1D' target='_blank'>
                    <Github />
                </Link>
                <Link href=' https://www.linkedin.com/in/diego-fernandes-dev' target='_blank'>
                    <Linkedin />
                </Link>
            </SocialMedia>
        </Container>
    )
}

export default Footer;