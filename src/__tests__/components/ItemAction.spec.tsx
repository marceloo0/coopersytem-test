import React from 'react';
import {render} from '@testing-library/react-native';

import ItemAction from '../../components/ItemAction';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'name',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('ItemAction component', () => {
  it('should render ItemAction', () => {
    const {getByTestId} = render(
      <ItemAction
        acao={{id: '1', nome: 'BBAS3', percentual: 28.1}}
        total={39321.29}
      />,
    );

    expect(getByTestId('itemAction')).toBeTruthy();
  });
});
