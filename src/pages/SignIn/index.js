import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Alert } from 'react-native';
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

  const schema = Yup.object().shape({
    username: Yup.number('')
      .integer('O código informado deve ser um número inteiro')
      .positive('O código informado deve ser um número positivo')
      .required('Favor informar o seu id de usuário'),
  });

  async function handleSubmit() {
    schema
      .isValid({
        username,
      })
      .then(valid => {
        if (valid) {
          dispatch(signInRequest(username));
        } else {
          schema.validate({ username }).catch(err => {
            Alert.alert('Erro de Validação', err.message);
            console.tron.log(err); // => ['Deve ser maior que 18']
          });
        }
      });
    // .catch(() => {
    // });
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
