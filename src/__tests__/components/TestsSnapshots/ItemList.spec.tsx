import React from 'react';
import renderer from 'react-test-renderer';
import ItemList from '../../../components/ItemList';

jest.useFakeTimers();

test('renders correctly', () => {
  const itemList = renderer
    .create(
      <ItemList
        onPress={() => {}}
        disabled={true}
        description="Viajem dos sonhos"
        title="Investimento II"
        value="R$ 7.500,00"
      />,
    )
    .toJSON();
  expect(itemList).toMatchSnapshot();
});
