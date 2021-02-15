import React from 'react';

import {Container, Title} from './styles';

interface TitleProps {
  title: string;
  description?: string;
}

const TitleBox: React.FC<TitleProps> = ({title, description}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Title>{description}</Title>
    </Container>
  );
};

export default TitleBox;
