import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator testID="loader" size="large" color={'#cecece'} />
    </Container>
  );
};

export default Loader;
