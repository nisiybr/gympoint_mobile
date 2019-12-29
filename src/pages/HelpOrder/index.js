import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import HelpItem from '~/components/Help';

import { Container, HelpButton, HelpButtonText, HelpList } from './styles';

function HelpOrder({ navigation, isFocused }) {
  const [helps, setHelps] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const profile = useSelector(state => state.user.profile);

  async function loadHelps() {
    setRefreshing(true);
    const response = await api.get(`students/${profile.id}/help-orders`);
    setHelps(response.data);
    setRefreshing(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadHelps();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  function handleDetail(item) {
    navigation.navigate('HelpOrderDetail', item);
  }
  function handleNew() {
    navigation.navigate('HelpOrderNew');
  }
  return (
    <Container>
      <HelpButton onPress={handleNew}>
        <HelpButtonText>Novo pedido de auxílio</HelpButtonText>
      </HelpButton>
      <HelpList
        data={helps}
        keyExtractor={item => String(item.id)}
        refreshing={refreshing}
        onRefresh={loadHelps}
        renderItem={({ item }) => (
          <HelpItem onDetail={() => handleDetail(item)} data={item} />
        )}
      />
    </Container>
  );
}

export default withNavigationFocus(HelpOrder);

// HelpOrder.navigationOptions = {
//   tabBarLabel: 'Pedir Ajuda',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="help" size={20} color={tintColor} />
//   ),
// };
