import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { SwipeListView } from "react-native-swipe-list-view";
import netuno1 from "../../assets/images/Netuno_1.jpg";
import netuno2 from "../../assets/images/Netuno_2.jpg";
import netuno3 from "../../assets/images/Netuno_3.jpg";
import netuno4 from "../../assets/images/Netuno_4.jpg";
import { PageStack } from "../../component/page.component";

function Netuno({ navigation }) {
  const [userData] = useState([
    {
      img: "https://uploaddeimagens.com.br/images/003/183/526/full/Nereida.png?1617715473",
      name: "Nereida",
      nameId: "Nereida",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/183/531/full/Larissa.png?1617715520",
      name: "Larissa",
      nameId: "Larissa",
    },
  ]);

  const items = [
    {
      key: String(Math.random()),
      img: netuno1,
      label: "Netuno 1",
    },

    {
      key: String(Math.random()),
      img: netuno2,
      label: "Netuno 2",
    },

    {
      key: String(Math.random()),
      img: netuno3,
      label: "Netuno 3",
    },

    {
      key: String(Math.random()),
      img: netuno4,
      label: "Netuno 4",
    },
  ];

  return (
    <View>
      <ScrollView>
        <Header>
          <Description>
            Composição: por gases, como hidrogênio, hélio e metano.
          </Description>
          <Description>Tamanho: 4 vezes maior que Terra.</Description>
          <Description>Localização: 4.504.300.000 km do Sol.</Description>
          <Description>Temperatura: -218°C.</Description>
          <Description>
            Presença ou não de Satélites: Possui cerca de 13 satélites naturais.
          </Description>
        </Header>

        <Container>
          <Title>Banco de imagens de Netuno</Title>

          <Card>
            {items.map((item) => (
              <View key={item.key}>
                <CardImageCover>
                  <CardImage source={item.img}></CardImage>
                  <CardDescription>{item.label}</CardDescription>
                </CardImageCover>
              </View>
            ))}
          </Card>
        </Container>

        <Container>
          <Title>Satélites naturais (2 exemplos)</Title>

          <SwipeListView
            data={userData}
            renderItem={(data, rowMap) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(data.item.nameId)}
              >
                <View
                  style={{
                    backgroundColor: "#f1f3f6",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginVertical: 4,
                    borderRadius: 8,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 80, height: 80, borderRadius: 100 }}
                    source={{ uri: data.item.img }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontWeight: "400",
                      fontSize: 16,
                    }}
                  >
                    {data.item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Container>
      </ScrollView>
    </View>
  );
}

export default function() {
  return <PageStack Screen={Netuno} screenname="Netuno" />;
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #001ed8;
  border-radius: 20px;
`;

const Description = styled.Text`
  color: #fff;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;

const Card = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
  },
}))``;

const CardImageCover = styled.View`
  width: 200px;
  height: 250px;
  background: #001ed8;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const CardImage = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  width: 185px;
  height: 185px;
`;

const CardDescription = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
`;

const Container = styled.ScrollView`
  margin-top: 55px;
`;

const Title = styled.Text`
  color: #808080;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
