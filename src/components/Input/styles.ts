import styled, {css} from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

interface TextProps {
  isFocused: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  height: 85px;
`;
export const ContainerInput = styled.View``;
export const Text = styled.Text<TextProps>`
  top: 0;
  position: absolute;
  margin-left: 20px;
  color: #6c6c80;
  font-weight: bold;

  ${(props) =>
    props.isFocused &&
    css`
      color: blue;
    `}
`;
export const Error = styled.Text`
  color: #c72828;
  border-bottom-color: #c72828;
  border-bottom-width: 1px;
  margin-bottom: 16px;
  margin-left: 20px;
  font-weight: bold;
`;

export const TextInput = styled(TextInputMask)`
  margin-top: 12px;
  margin-left: 20px;
  color: #333;
  font-size: 18px;
  border-bottom-color: #e8eded;
  border-bottom-width: 1px;
  font-weight: bold;
`;
