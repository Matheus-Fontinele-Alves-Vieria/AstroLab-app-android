import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from "styled-components/native";
import venus1 from '../assets/images/Venus_1.jpg';
import venus2 from '../assets/images/Venus_2.jpg';
import venus3 from '../assets/images/Venus_3.jpg';
import venus4 from '../assets/images/Venus_4.jpg';

export default function Venus() {
    const items = [
        {
            key: String(Math.random()),
            img: venus1,
            label: "Vênus 1",
        },

        {
            key: String(Math.random()),
            img: venus2,
            label: "Vênus 2",
        },

        {
            key: String(Math.random()),
            img: venus3,
            label: "Vênus 3",
        },

        {
            key: String(Math.random()),
            img: venus4,
            label: "Vênus 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: silicatos e basaltos e sua atmosfera composta por nitrogênio, gás carbônico e vapor d'água.
                    </Description>
                    <Description>
                        Tamanho: Parecido com o da Terra.
                    </Description>
                    <Description>
                        Localização: 108.200.000 km de distância do Sol.
                    </Description>
                    <Description>
                        Temperatura: 460 ºC.
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Não possui satélites.
                    </Description>
                </Header>

                <Container1>
                    <Title>Banco de imagens de Vênus</Title>

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
                </Container1>

                <Container2/>
            </ScrollView>
        </View>
    );
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #b7663b;
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
        alignItems: 'center',
    },
}))`
`;

const CardImageCover = styled.View`
    width: 200px;
    height: 250px;
    background: #b7663b;
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

const Container1 = styled.ScrollView`
    margin-top: 55px;
`;

const Container2 = styled.ScrollView`
    margin-top: 10px;
`;

const Title = styled.Text`
    color: #808080;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;