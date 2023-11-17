import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top:10px;
`;
export const ErrorText = styled.Text`
  color:${props=>props.theme.colors.main};
  font-family: ${props=> props.theme.fonts.regular};
`;