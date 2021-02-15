import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Platform, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';

import Header from '../../components/Header';
import TitleBox from '../../components/TitleBox';
import ItemLine from '../../components/ItemLine';
import ItemAction from '../../components/ItemAction';
import Bottom from '../../components/Bottom';
import Modal from '../../components/Modal';

import formatValue from '../../utils/formatalue';

import {useAction} from '../../hooks/action';

import {Container, Form} from './styles';

interface Action {
  id: string;
  nome: string;
  percentual: number;
}

interface Params {
  acoes: Action[];
  nome: string;
  saldoTotalDisponivel: number;
}

const Rescue: React.FC = () => {
  const {params} = useRoute();
  const {navigate} = useNavigation();
  const {acoes, nome, saldoTotalDisponivel} = params as Params;

  const formRef = useRef<FormHandles>(null);
  const [visible, setVisible] = useState(false);
  const {setActions, total, investActions} = useAction();

  const [btn, setBtn] = useState('');
  const [textModal, setTextModal] = useState({
    title: '',
    description: '',
    btnText: '',
  });

  useEffect(() => {
    setActions(acoes);
  }, [setActions, acoes]);

  const handleModal = useCallback(() => {
    navigate('Investments');
  }, [navigate]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setBtn('');
  }, []);

  const handleForm = useCallback(() => {
    if (total <= 0) {
      return [
        setVisible(true),
        setTextModal({
          title: 'Erro no resgate',
          description: 'O valor de resgate não pode ser zero.',
          btnText: 'OK',
        }),
        setBtn('OK'),
      ];
    }

    const mgsError = investActions
      .filter((acao) => {
        return (
          acao.valor &&
          acao.valor > Math.round(acao.percentual * saldoTotalDisponivel) / 100
        );
      })
      .map(
        (acao) =>
          `${acao.nome}: Valor máximo de ${formatValue(
            Math.round(acao.percentual * saldoTotalDisponivel) / 100,
          )}`,
      );

    if (mgsError.length) {
      return [
        setVisible(true),
        setTextModal({
          title: 'Erro no resgate',
          description: `Verifique o campo invalido: \n\n ${mgsError.join(
            '\n',
          )}`,
          btnText: 'OK',
        }),
        setBtn('OK'),
      ];
    }

    if (total > 0 && total < saldoTotalDisponivel) {
      return [
        setVisible(true),
        setTextModal({
          title: 'RESGATE EFETUADO',
          description:
            'O valor solicitado estará disponível em sua conta em 5 dias uteis.',
          btnText: 'NOVO RESGATE',
        }),
        setBtn('NOVO'),
      ];
    }
  }, [total, saldoTotalDisponivel, investActions]);

  return (
    <Container
      testID="rescue-list"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <Header />
      <ScrollView>
        <Form ref={formRef} onSubmit={handleForm}>
          <TitleBox title={'DADOS DO INVESTIMENTO'} />
          <ItemLine title={'Nome'} description={nome} />
          <ItemLine
            title={'Saldo total disponível'}
            description={formatValue(saldoTotalDisponivel)}
          />
          <TitleBox title="RESGATE DO SEU JEITO" />
          {investActions.map((item) => (
            <ItemAction
              key={item.id}
              acao={item}
              total={saldoTotalDisponivel}
            />
          ))}
          <ItemLine title="Valor total" description={formatValue(total)} />
          <Bottom
            onPress={() => formRef.current?.submitForm()}
            text="CONFIRMAR RESGATE"
          />
        </Form>
        {btn === 'OK' ? (
          <Modal
            handleModal={handleClose}
            visible={visible}
            texts={textModal}
          />
        ) : (
          <Modal
            handleModal={handleModal}
            visible={visible}
            texts={textModal}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default Rescue;
