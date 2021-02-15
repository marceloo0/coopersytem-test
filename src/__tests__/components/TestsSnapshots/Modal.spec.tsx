import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../../../components/Modal';

jest.useFakeTimers();

test('renders correctly', () => {
  const modal = renderer
    .create(
      <Modal
        visible={true}
        handleModal={() => {}}
        texts={{
          title: 'RESGATE EFETUADO',
          description:
            'O valor solicitado estará disponível em sua conta em 5 dias uteis.',
          btnText: 'NOVO RESGATE',
        }}
      />,
    )
    .toJSON();
  expect(modal).toMatchSnapshot();
});
