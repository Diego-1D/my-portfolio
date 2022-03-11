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
    <Container>
      <Title>Portfólio</Title>
      <Wrapper>
        {
          Projects.map((index, key) => {
            return (
              <Card key={key}>
                <Imagem src={index.image} />
                <Name>{index.name}</Name>
                {/* <TechnologiesUsedArea>
                  <TechnologiesUsed src={IconeI} />
                  <TechnologiesUsed src={IconeII} />
                  <TechnologiesUsed src={IconeIII} />
                  <TechnologiesUsed src={IconeIIII} />
                </TechnologiesUsedArea> */}
              </Card>
            )
          })
        }
      </Wrapper>
    </Container>
  )
}

export default Portfolio;