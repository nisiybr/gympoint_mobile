import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
`;

export const HelpButton = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background: #ee4e62;
  align-items: center;
  justify-content: center;
`;
export const HelpButtonText = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const HelpList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
