import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppContainer from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
        <Routes />
      </AppContainer>
    </NavigationContainer>
  );
};

export default App;
