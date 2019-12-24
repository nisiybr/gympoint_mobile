import React from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Help,
  Header,
  Status,
  StatusText,
  CreatedTime,
  Content,
  LabelText,
} from './styles';

export default function HelpOrderDetail({ navigation }) {
  const data = navigation.state.params;

  const createdAtParsed = formatRelative(parseISO(data.createdAt), new Date(), {
    locale: pt,
    addSuffix: true,
  });

  const answered = Boolean(data.answered_at);

  const answeredAtParsed = answered
    ? formatRelative(parseISO(data.answered_at), new Date(), {
        locale: pt,
        addSuffix: true,
      })
    : new Date();

  return (
    <Container>
      <Help>
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
        </Header>
        <Header>
          <LabelText>PERGUNTA</LabelText>
          <CreatedTime>{createdAtParsed}</CreatedTime>
        </Header>
        <Content>{data.question}</Content>
        {answered ? (
          <>
            <Header>
              <LabelText>RESPOSTA</LabelText>
              <CreatedTime>{answeredAtParsed}</CreatedTime>
            </Header>
            <Content>{data.answer}</Content>
          </>
        ) : null}
      </Help>
    </Container>
  );
}

// HelpOrder.navigationOptions = {
//   tabBarLabel: 'Pedir Ajuda',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="help" size={20} color={tintColor} />
//   ),
// };
