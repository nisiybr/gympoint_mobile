import React from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Status,
  StatusText,
  Time,
  Question,
} from './styles';

export default function Help({ data, onDetail }) {
  const dateParsed = formatRelative(parseISO(data.createdAt), new Date(), {
    locale: pt,
    addSuffix: true,
  });

  const answered = Boolean(data.answered_at);

  return (
    <Container onPress={onDetail}>
      <Header>
        <Status>
          <Icon
            name="check-circle"
            size={20}
            color={answered ? '#42CB59' : '#999999'}
          />
          <StatusText answered={answered}>
            {answered ? 'Respondido' : 'Sem Resposta'}
          </StatusText>
        </Status>
        <Time>{dateParsed}</Time>
      </Header>
      <Question>{data.question}</Question>
    </Container>
  );
}
