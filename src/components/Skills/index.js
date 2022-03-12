import React from 'react';
import { Technologies } from '../../data/data';
import {
    Container,
    Title,
    Wrapper,
    TechnologiesIcon,
    AreaIcon,
    TitleIcon
} from './styles';

const Skills = () => {
    return (
        <Container id='skills'>
            <Title>Software Skills</Title>
            <Wrapper>
                {
                    Technologies.map((index, key) => {
                        return (
                            <AreaIcon key={key}>
                                <TechnologiesIcon src={index.icon} />
                                <TitleIcon>{index.name}</TitleIcon>
                            </AreaIcon>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default Skills;