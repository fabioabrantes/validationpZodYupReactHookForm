import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${props=> props.theme.fonts.bold};
  color: ${props=> props.theme.colors.title};
  margin-top: 60px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${props=> props.theme.colors.text};
  line-height: 25px;  
`;

