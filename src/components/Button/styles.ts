import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=>props.theme.colors.main};
  margin-bottom: 8px;
  margin-top:20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${(props)=>props.theme.colors.white};
  font-family: ${props=> props.theme.fonts.bold};
`;