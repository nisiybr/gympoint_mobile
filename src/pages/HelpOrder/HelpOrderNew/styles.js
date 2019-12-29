import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  background: #f2f2f2;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const HelpInput = styled.TextInput.attrs({
  numberOfLines: 15,
  multiline: true,
})`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #999999;
  padding: 20px;
  text-align-vertical: top;
`;

export const SubmitButton = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background: #ee4e62;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
export const SubmitButtonText = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;
