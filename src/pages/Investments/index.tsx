import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAction} from '../../hooks/action';

import Header from '../../components/Header';
import TitleBox from '../../components/TitleBox';
import ItemList from '../../components/ItemList';
import Loader from '../../components/Loader';

import formatValue from '../../utils/formatalue';

import {Container, ContainerFlatList, HeaderItem} from './styles';

const Investments: React.FC = () => {
  const {investments, loading} = useAction();
  const {navigate} = useNavigation();

  function renderHeader() {
    return (
      <>
        <HeaderItem>
          <TitleBox title="INVESTIMENTOS" description="R$" />
        </HeaderItem>
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container testID="investment-list">
      <Header />
      <ContainerFlatList
        ListHeaderComponent={renderHeader}
        data={investments}
        keyExtractor={(item) => item.nome}
        renderItem={({item}) => (
          <ItemList
            disabled={item.indicadorCarencia === 'S'}
            title={item.nome}
            onPress={() => navigate('Rescue', item)}
            description={item.objetivo}
            value={formatValue(item.saldoTotalDisponivel)}
          />
        )}
      />
    </Container>
  );
};

export default Investments;
