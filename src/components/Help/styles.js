import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  min-height: 50px;
  padding: 20px;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px;
  border-color: #dddddd;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StatusText = styled.Text`
  margin-left: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.answered ? '#42CB59' : '#444444')};
`;

export const Time = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;
export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 16px;
  color: #666666;
  font-size: 14px;
  line-height: 26px;
`;
