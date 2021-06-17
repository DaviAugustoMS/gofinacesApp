import React from "react";
import {
  CardWrapper,
  CardContent,
  CardTop,
  CardTitle,
  CardIcon,
  CardBottom,
  CardValue,
  CardDate,
} from "./styles";

import theme from "../../global/styles/theme";

export function Card({ name, value, date }: any) {
  return (
    <>
      {/* @ts-ignore */}
      <CardWrapper
        //@ts-ignore
        bc={`${name === "Total" ? theme.colors.segundary : theme.colors.shape}`}
      >
        <CardContent>
          <CardTop>
            {/* @ts-ignore */}
            <CardTitle
              //@ts-ignore
              color={`${
                name === "Total" ? theme.colors.shape : theme.colors.title
              }`}
            >
              {name}
            </CardTitle>
            <CardIcon
              //@ts-ignore
              name={`${
                name === "Entradas"
                  ? "arrow-up-circle"
                  : `${name === "Total" ? "dollar-sign" : "arrow-down-circle"}`
              }`}
              //@ts-ignore
              theme={`${
                name === "Entradas"
                  ? theme.colors.success
                  : `${
                      name === "Total"
                        ? theme.colors.shape
                        : theme.colors.attention
                    }`
              }`}
            />
          </CardTop>
          <CardBottom>
            {/* @ts-ignore */}
            <CardValue
              //@ts-ignore
              color={`${
                name === "Total" ? theme.colors.shape : theme.colors.title
              }`}
            >
              R$ {value}
            </CardValue>
            {/* @ts-ignore */}
            <CardDate
              //@ts-ignore
              color={`${
                name === "Total" ? theme.colors.shape : theme.colors.text
              }`}
            >
              {date}
            </CardDate>
          </CardBottom>
        </CardContent>
      </CardWrapper>
    </>
  );
}
