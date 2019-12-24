import React from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, CheckinNumber, Time } from './styles';

export default function Checkin({ data }) {
  const dateParsed = formatRelative(parseISO(data.createdAt), new Date(), {
    locale: pt,
    addSuffix: true,
  });
  return (
    <Container>
      <CheckinNumber>Check-in #{data.index}</CheckinNumber>
      <Time>{dateParsed}</Time>
    </Container>
  );
}
