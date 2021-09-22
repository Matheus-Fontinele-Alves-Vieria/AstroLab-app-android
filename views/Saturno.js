import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Image, Text } from 'react-native';
import styled from "styled-components/native";
import { SwipeListView } from 'react-native-swipe-list-view';
import saturno1 from '../assets/images/Saturno_1.jpg';
import saturno2 from '../assets/images/Saturno_2.jpg';
import saturno3 from '../assets/images/Saturno_3.jpeg';
import saturno4 from '../assets/images/Saturno_4.jpg';

export default function Saturno({navigation}) {
    const [userData] = useState([
        {
            img: 'https://uploaddeimagens.com.br/images/003/175/573/full/Tit%C3%A3.png?1617141538',
            name: 'Titã',
            nameId: 'Tita'
        },

        {
            img: 'https://uploaddeimagens.com.br/images/003/175/575/full/Enc%C3%A9lado.png?1617141580',
            name: 'Encélado',
            nameId: 'Encelado'
        }
    ]);

    const items = [
        {
            key: String(Math.random()),
            img: saturno1,
            label: "Saturno 1",
        },

        {
            key: String(Math.random()),
            img: saturno2,
            label: "Saturno 2",
        },

        {
            key: String(Math.random()),
            img: saturno3,
            label: "Saturno 3",
        },

        {
            key: String(Math.random()),
            img: saturno4,
            label: "Saturno 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: por gases como hidrogênio, hélio e metano. 
                    </Description>
                    <Description>
                        Tamanho: Segundo maior planeta um pouco menor do que Júpiter.
                    </Description>
                    <Description>
                        Localização: 1.429.400.000 km do Sol.
                    </Description>
                    <Description>
                        Temperatura: -140°C. 
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Possui 18 satélites naturais. 
                    </Description>
                </Header>

                <Container>
                    <Title>Banco de imagens de Saturno</Title>

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
                                    backgroundColor: '#f1f3f6',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    marginVertical: 4,
                                    borderRadius: 8,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    style={{width: 80, height: 80, borderRadius: 100}}
                                    source={{uri: data.item.img}}
                                />
                                <Text
                                    style={{
                                    marginLeft: 10,
                                    fontWeight: '400',
                                    fontSize: 16
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

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ec9246;
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
    background: #ec9246;
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