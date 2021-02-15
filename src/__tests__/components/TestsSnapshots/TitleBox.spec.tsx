import React from 'react';
import renderer from 'react-test-renderer';
import TitleBox from '../../../components/TitleBox';

test('renders correctly', () => {
  const titleBox = renderer
    .create(<TitleBox title="RESGATE DO SEU JEITO" />)
    .toJSON();
  expect(titleBox).toMatchSnapshot();
});
