import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  background: #f2f2f2;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
export const Help = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

export const CreatedTime = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;
export const Content = styled.Text`
  color: #666666;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 20px;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #444444;
  font-weight: bold;
`;
