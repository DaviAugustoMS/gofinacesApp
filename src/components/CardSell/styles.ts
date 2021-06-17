import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const CardWrapper = styled.View`
  width: 100%;
  height: ${RFValue(128)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 15px;
`;

export const CardContent = styled.View`
  padding: 24px;
  padding-top: 17px;
  justify-content: space-between;
  height: 100%;
`;
export const CardTop = styled.View``;

export const CardSellBuy = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.title};
`;
export const CardValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: ${({ color }: any) => color};
  margin-top: 10px;
`;
export const CardBottom = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const CardStory = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text};
`;
export const CardDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text};
`;
