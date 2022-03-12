import React from 'react';
import { Projects } from '../../data/data';
import {
  Container,
  Title,
  Wrapper,
  Card,
  Imagem,
  Name,
  TechnologiesUsedArea,
  TechnologiesUsed
} from './styles';

const Portfolio = () => {
  return (
    <Container id='portfolio'>
      <Title>Portfólio</Title>
      <Wrapper>
        {
          Projects.map((index, key) => {
            return (
              <Card key={key}>
                <Imagem src={index.image} />
                <Name>{index.name}</Name>
                <TechnologiesUsedArea>
                  {
                    index.technoUsed.map(techos=>(
                      <TechnologiesUsed src={techos}/>
                    ))
                  }
                </TechnologiesUsedArea>
              </Card>
            )
          })
        }
      </Wrapper>
    </Container>
  )
}

export default Portfolio;