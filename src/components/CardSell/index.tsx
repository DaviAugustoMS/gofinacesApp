import React from "react";

import {
  CardDate,
  CardValue,
  CardBottom,
  CardTop,
  CardContent,
  CardWrapper,
  CardSellBuy,
  CardStory,
} from "./styles";

export function CardSell({ name, value, type, data, negative }: any) {
  return (
    <CardWrapper>
      <CardContent>
        <CardTop>
          <CardSellBuy>{name}</CardSellBuy>
          {/* @ts-ignore */}
          <CardValue color={negative ? "#E83F5B" : "#12A454"}>
            {negative && "-"} R$ {value}
          </CardValue>
        </CardTop>
        <CardBottom>
          <CardStory>{type}</CardStory>
          <CardDate>{data}</CardDate>
        </CardBottom>
      </CardContent>
    </CardWrapper>
  );
}
