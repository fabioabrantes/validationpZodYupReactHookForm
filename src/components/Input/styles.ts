import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${props=>props.theme.colors.white};
  border-bottom-color: ${props => props.isFocused ? props.theme.colors.main : props.theme.colors.white};
  border-bottom-width: ${props => props.isFocused ? '2px' : '0px'};
`;

export const IconFeather = styled(Feather)<Props>`
  color: ${ props => props.isFocused ? props.theme.colors.main : props.theme.colors.text_detail};
`;

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: ${props=>props.theme.colors.white};
  color: ${props=>props.theme.colors.text};
  padding: 0 23px;
  border-bottom-color: ${props => props.isFocused ? props.theme.colors.main : props.theme.colors.white};
  border-bottom-width: ${props => props.isFocused ? '2px' : '0px'};
`;