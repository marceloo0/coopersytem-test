import React from 'react';
import {render} from '@testing-library/react-native';

import Loader from '../../components/Loader';

describe('Loader component', () => {
  it('should render component loader', () => {
    const {getByTestId} = render(<Loader />);

    expect(getByTestId('loader')).toBeTruthy();
  });
});
