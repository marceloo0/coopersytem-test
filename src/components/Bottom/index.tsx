import React from 'react';
import {Container, TextButton} from './styles';

interface BottomProps {
  onPress(): void;
  text: string;
}

const Bottom: React.FC<BottomProps> = ({onPress, text}) => {
  return (
    <Container onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Container>
  );
};

export default Bottom;
