import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #dddddd;
`;
export const CheckinNumber = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
`;
export const Time = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #666666;
`;
