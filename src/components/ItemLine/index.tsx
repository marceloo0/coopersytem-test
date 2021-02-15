import React from 'react';

import {Container, Content, Title, Description} from './styles';

interface ItemLineProps {
  title: string;
  description: string;
}

const ItemLine: React.FC<ItemLineProps> = ({title, description}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default ItemLine;
