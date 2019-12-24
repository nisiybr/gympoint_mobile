import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import HelpItem from '~/components/Help';

import { Container, HelpButton, HelpButtonText, HelpList } from './styles';

export default function HelpOrder({ navigation }) {
  const [helps, setHelps] = useState([]);
  const profile = useSelector(state => state.user.profile);

  async function loadHelps() {
    const response = await api.get(`students/${profile.id}/help-orders`);
    setHelps(response.data);
  }

  useEffect(() => {
    loadHelps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleHelp() {}

  return (
    <Container>
      <HelpButton onPress={handleHelp}>
        <HelpButtonText>Novo pedido de auxílio</HelpButtonText>
      </HelpButton>
      <HelpList
        data={helps}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <HelpItem data={item} />}
      />
    </Container>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};
