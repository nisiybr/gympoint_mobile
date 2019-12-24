import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  Logo,
  LoginInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(username));
  }
  return (
    <Container>
      <Form>
        <Logo source={logo} />
        <LoginInput
          placeholder="Informe seu ID de cadastro"
          onChangeText={setUsername}
          value={username}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          keyboardType="number-pad"
        />
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
