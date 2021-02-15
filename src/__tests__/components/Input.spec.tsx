import React from 'react';
import {render} from '@testing-library/react-native';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'price',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const {getByPlaceholderText} = render(
      <Input
        name="name"
        total={10}
        acao={{
          id: '1',
          nome: 'nome',
          percentual: 10,
        }}
        placeholder="valor a resgatar"
      />,
    );

    expect(getByPlaceholderText('valor a resgatar')).toBeTruthy();
  });
});
