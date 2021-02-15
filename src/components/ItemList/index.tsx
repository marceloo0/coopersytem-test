import React from 'react';

import {Container, Info, Title, Description, Value} from './styles';

interface ItemListProps {
  onPress(): void;
  disabled: boolean;
  title: string;
  description: string;
  value: string;
}

const ItemList: React.FC<ItemListProps> = ({
  onPress,
  disabled,
  title,
  description,
  value,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Info>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Info>
      <Description>{description}</Description>
    </Container>
  );
};

export default ItemList;
