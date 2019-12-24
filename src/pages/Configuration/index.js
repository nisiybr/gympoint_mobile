import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LogoutButton, LogoutButtonText } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Configuration() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>Deslogar do Aplicativo</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}

Configuration.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="settings" size={20} color={tintColor} />
  ),
};
