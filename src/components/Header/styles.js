import styled from 'styled-components/native';
import logo from '~/assets/logoHeader.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})``;
