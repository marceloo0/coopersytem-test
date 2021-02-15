import React from 'react';
import renderer from 'react-test-renderer';
import ItemLine from '../../../components/ItemLine';

test('renders correctly', () => {
  const itemLine = renderer
    .create(
      <ItemLine title="Saldo total disponivel" description="R$ 9.000,00" />,
    )
    .toJSON();
  expect(itemLine).toMatchSnapshot();
});
