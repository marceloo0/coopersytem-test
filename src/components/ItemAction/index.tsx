import React from 'react';

import ItemLine from '../ItemLine';
import Input from '../Input';

import formatValue from '../../utils/formatalue';

import {Container} from './styles';

interface Acoes {
  id: string;
  nome: string;
  percentual: number;
}

interface Props {
  acao: Acoes;
  total: number;
}

const ItemAction: React.FC<Props> = ({acao, total}) => {
  const formatedValue = Math.round(acao.percentual * total) / 100;

  return (
    <Container testID="itemAction">
      <ItemLine title="Ação" description={acao.nome} />
      <ItemLine
        title="Saldo acumulado"
        description={formatValue(formatedValue)}
      />
      <Input
        name={acao.nome}
        placeholder="Valor a resgatar"
        keyboardType="numeric"
        total={formatedValue}
        acao={acao}
      />
    </Container>
  );
};

export default ItemAction;
