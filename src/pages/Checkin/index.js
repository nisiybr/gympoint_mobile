import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';
import CheckinItem from '~/components/Checkin';

import {
  Container,
  CheckinButton,
  CheckinButtonText,
  CheckinList,
} from './styles';

export default function Checkin() {
  const [checkins, setCheckins] = useState([]);
  const profile = useSelector(state => state.user.profile);

  async function loadCheckins() {
    try {
      const response = await api.get(`students/${profile.id}/checkins`);
      const { data } = response;

      let position = 0;

      const data2 = data.map(item => {
        position += 1;
        return {
          ...item,
          index: position,
        };
      });
      setCheckins(data2);
    } catch (err) {
      Alert.alert(
        'Falha na busca de Dados',
        'Houve um erro ao buscar os dados. Por favor entre em contato com o Administrador.'
      );
    }
  }
  useEffect(() => {
    loadCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCheckin() {
    await api.post(`students/${profile.id}/checkins`);
    loadCheckins();
  }

  return (
    <Container>
      <CheckinButton onPress={handleCheckin}>
        <CheckinButtonText>Novo check-in</CheckinButtonText>
      </CheckinButton>
      <CheckinList
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CheckinItem data={item} />}
      />
    </Container>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
