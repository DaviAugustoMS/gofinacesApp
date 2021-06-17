import React from "react";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Photo,
  UserWrapper,
  UserPower,
  UserCard,
  Listen,
  ListenText,
} from "./styles";

import { Card, CardSell } from "../../components";
//@ts-ignore
import values from "../../utils/values";
//@ts-ignore
import sellBuyDo from "../../utils/sell";

export function Dashboard() {
  const data = values;
  const dataSell = sellBuyDo;
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/43098770?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Davi Augusto</UserName>
            </User>
          </UserInfo>
          <UserPower name="power" />
        </UserWrapper>
        <UserCard>
          {data &&
            data?.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                value={item.value}
                date={item.date}
              />
            ))}
        </UserCard>
      </Header>

      <Listen>
        <ListenText>Listagem</ListenText>

        <FlatList
          data={dataSell}
          style={{ height: "50%" }}
          // keyExtractor={item.id}
          renderItem={({ item }) => (
            <CardSell
              name={item.name}
              value={item.value}
              type={item.type}
              data={item.date}
              negative={item.negative}
            />
          )}
        />
      </Listen>
    </Container>
  );
}
