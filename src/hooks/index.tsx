import React from 'react';

import {ActionProvider} from './action';

const AppProvider: React.FC = ({children}) => {
  return <ActionProvider>{children}</ActionProvider>;
};

export default AppProvider;
