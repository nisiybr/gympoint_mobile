import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ActivityIndicator,
  Alert,
} from 'react-native'; /** Icone de loading ja estilizado no OS */
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';

import {
  Container,
  Form,
  HelpInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function HelpOrderNew({ navigation }) {
  const [help, setHelp] = useState('');
  const [loading, setLoading] = useState(false);

  const profile = useSelector(state => state.user.profile);

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        help: Yup.string().required(),
      });
      if (
        !(await schema.isValid({
          help,
        }))
      ) {
        Alert.alert(
          'Erro de Validação',
          'Pedido de auxilio não pode ficar em branco'
        );
        return;
      }

      setLoading(true);
      const response = await api.post(`students/${profile.id}/help-orders`, {
        question: help,
      });
      setLoading(false);
      navigation.navigate('HelpOrder', response.data);
    } catch (err) {
      console.tron.log(err);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form>
        <HelpInput
          placeholder="Inclua seu pedido de auxilio"
          onChangeText={setHelp}
          value={help}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color="FFF" />
          ) : (
            <SubmitButtonText>Enviar pedido</SubmitButtonText>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}

// HelpOrder.navigationOptions = {
//   tabBarLabel: 'Pedir Ajuda',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="help" size={20} color={tintColor} />
//   ),
// };
