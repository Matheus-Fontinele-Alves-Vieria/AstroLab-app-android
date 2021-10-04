import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import sol1 from "../../assets/images/Sol_1.jpg";
import sol2 from "../../assets/images/Sol_2.jpg";
import sol3 from "../../assets/images/Sol_3.jpg";
import sol4 from "../../assets/images/Sol_4.jpg";
import { PageStack } from "../../components/page.component";

function SolPage() {
  const items = [
    {
      key: String(Math.random()),
      img: sol1,
      label: "Sol 1",
    },

    {
      key: String(Math.random()),
      img: sol2,
      label: "Sol 2",
    },

    {
      key: String(Math.random()),
      img: sol3,
      label: "Sol 3",
    },

    {
      key: String(Math.random()),
      img: sol4,
      label: "Sol 4",
    },
  ];

  return (
    <View>
      <Header>
        <Description>
          Composição: Hidrogênio (aproximadamente 90%) e Hélio (9%).
        </Description>
        <Description>Tamanho: 109 vezes maior que a Terra.</Description>
        <Description>
          Localização: Via Láctea/ estrela central/ Distância da Terra:
          149.600.000 km.
        </Description>
        <Description>Temperatura: 5504,85 ºC.</Description>
      </Header>

      <Container>
        <Title>Banco de imagens do Sol</Title>

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
    </View>
  );
}

export default function({ setTitle }) {
    return <PageStack Screen={SolPage} screenname="Sol" setTitle={setTitle} />
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #daa520;
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
  background: #daa520;
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
