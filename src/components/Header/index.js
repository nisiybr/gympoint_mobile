import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Logo } from './styles';

function Header() {
  const signed = useSelector(state => state.auth.signed);

  if (signed) {
    return (
      <Container>
        <Logo />
      </Container>
    );
  }

  return null;
}

export default Header;
