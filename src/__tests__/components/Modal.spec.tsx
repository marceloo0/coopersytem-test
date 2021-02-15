import React from 'react';
import {render} from '@testing-library/react-native';

import Modal from '../../components/Modal';

describe('Modal component', () => {
  it('should render Modal', () => {
    const {getByTestId} = render(
      <Modal
        visible
        handleModal={jest.fn()}
        texts={{
          title: 'RESGATE EFETUADO',
          description:
            'O valor solicitado estará disponível em sua conta em 5 dias uteis.',
          btnText: 'NOVO RESGATE',
        }}
      />,
    );

    expect(getByTestId('modal-test')).toBeTruthy();
  });
});
