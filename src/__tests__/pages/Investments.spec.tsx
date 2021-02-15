import React from 'react';
import {render} from '@testing-library/react-native';

import Investments from '../../pages/Investments';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('page Investments', () => {
  it('should render Investments', () => {
    const {getByTestId} = render(<Investments />);

    expect(getByTestId('investment-list')).toBeTruthy();
  });
});
