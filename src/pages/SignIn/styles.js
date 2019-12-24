import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.View`
  flex: 1;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 20px;
`;

export const LoginInput = styled.TextInput`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #999999;
`;

export const SubmitButton = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background: #ee4e62;
  align-items: center;
  justify-content: center;
`;
export const SubmitButtonText = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;
