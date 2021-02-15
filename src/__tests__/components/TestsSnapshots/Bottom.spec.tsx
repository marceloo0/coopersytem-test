import React from 'react';
import renderer from 'react-test-renderer';
import Buttom from '../../../components/Bottom';

test('renders correctly', () => {
  const bottom = renderer
    .create(<Buttom text="CONFIRMAR RESGATE" onPress={() => {}} />)
    .toJSON();
  expect(bottom).toMatchSnapshot();
});
