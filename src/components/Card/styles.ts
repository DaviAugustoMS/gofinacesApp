import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const CardWrapper = styled.View`
  width: ${RFValue(300)}px;
  background: ${({ bc }: any) => bc};
  border-radius: 5px;
  margin-right: 16px;
`;

export const CardContent = styled.View`
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  justify-content: space-between;
  height: 100%;
`;

export const CardTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }: any) => color};
`;

export const CardIcon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme};
`;

export const CardBottom = styled.View`
  /* margin-top: 70px; */
`;

export const CardValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${({ color }: any) => color};
`;

export const CardDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${({ color }: any) => color};
`;
