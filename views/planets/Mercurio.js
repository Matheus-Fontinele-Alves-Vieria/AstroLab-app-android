import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from "styled-components/native";
import mercurio1 from '../../assets/images/Mercurio_1.jpg';
import mercurio2 from '../../assets/images/Mercurio_2.jpg';
import mercurio3 from '../../assets/images/Mercurio_3.jpg';
import mercurio4 from '../../assets/images/Mercurio_4.jpg';
import { PageStack } from '../../components/page.component';

function Mercurio() {
    const items = [
        {
            key: String(Math.random()),
            img: mercurio1,
            label: "Mercúrio 1",
        },

        {
            key: String(Math.random()),
            img: mercurio2,
            label: "Mercúrio 2",
        },

        {
            key: String(Math.random()),
            img: mercurio3,
            label: "Mercúrio 3",
        },

        {
            key: String(Math.random()),
            img: mercurio4,
            label: "Mercúrio 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: Basaltos e silicatos e a atmosfera por hidrogênio e hélio. 
                    </Description>
                    <Description>
                        Tamanho: Menor planeta. 
                    </Description>
                    <Description>
                        Localização: 57.910.000 km de distância do sol.
                    </Description>
                    <Description>
                        Temperatura: 550 °C.
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Não possui satélites.
                    </Description>
                </Header>

                <Container1>
                    <Title>Banco de imagens de Mercúrio</Title>

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

export default function Stack () {
    return <PageStack Screen={Mercurio} screenname="mercurio" />
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #897d6c;
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
    background: #897d6c;
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