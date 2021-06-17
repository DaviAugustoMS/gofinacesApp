import styled from "styled-components/native";

export const ButtonContent = styled.TouchableOpacity`
  width: 160px;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ color }: any) => color};
  justify-content: center;
  align-items: center;
  border-width: 1;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  font-weight: normal;
  color: ${({ color }: any) => color};
`;
