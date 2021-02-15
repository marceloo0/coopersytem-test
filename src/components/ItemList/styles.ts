import styled, {css} from 'styled-components/native';

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: #fff;
  margin-top: 3px;
  padding: 15px 20px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;
export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;
export const Description = styled.Text`
  color: #c9c9c9;
  font-size: 16px;
`;
export const Value = styled.Text`
  font-size: 21px;
`;
