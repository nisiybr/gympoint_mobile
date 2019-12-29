import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
`;

export const CheckinButton = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background: #ee4e62;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
export const CheckinButtonText = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const CheckinList = styled.FlatList`
  margin-top: 20px;
`;
