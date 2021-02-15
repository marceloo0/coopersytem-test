import React from 'react';
import ModalComponent from 'react-native-modal';

import Bottom from '../Bottom';

import {Container, Content, Title, Description, ContainerInfo} from './styles';

interface TextProps {
  title: string;
  description: string;
  btnText: string;
}

interface ModalProps {
  visible: boolean;
  handleModal: any;
  texts: TextProps;
}

const Modal: React.FC<ModalProps> = ({texts, visible, handleModal}) => {
  return (
    <Container testID="modal-test">
      <ModalComponent isVisible={visible}>
        <Content>
          <ContainerInfo>
            <Title>{texts.title}</Title>
            <Description>{texts.description}</Description>
          </ContainerInfo>
          <Bottom onPress={handleModal} text={texts.btnText} />
        </Content>
      </ModalComponent>
    </Container>
  );
};

export default Modal;
