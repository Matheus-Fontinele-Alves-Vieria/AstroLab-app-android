import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Image, Text } from 'react-native';
import styled from "styled-components/native";
import { SwipeListView } from 'react-native-swipe-list-view';
import jupiter1 from '../../assets/images/Jupiter_1.jpg';
import jupiter2 from '../../assets/images/Jupiter_2.jpg';
import jupiter3 from '../../assets/images/Jupiter_3.jpg';
import jupiter4 from '../../assets/images/Jupiter_4.jpg';
import { PageStack } from '../../component/page.component';

function Jupiter({navigation}) {
    const [userData] = useState([
        {
            img: 'https://uploaddeimagens.com.br/images/003/173/344/full/Europa.png?1617119970',
            name: 'Europa',
            nameId: 'Europa'
        },

        {
            img: 'https://uploaddeimagens.com.br/images/003/173/366/full/Calisto.png?1617120134',
            name: 'Calisto',
            nameId: 'Calisto'
        }
    ]);

    const items = [
        {
            key: String(Math.random()),
            img: jupiter1,
            label: "Júpiter 1",
        },

        {
            key: String(Math.random()),
            img: jupiter2,
            label: "Júpiter 2",
        },

        {
            key: String(Math.random()),
            img: jupiter3,
            label: "Júpiter 3",
        },

        {
            key: String(Math.random()),
            img: jupiter4,
            label: "Júpiter 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: por gases, como hidrogênio, hélio e metano.
                    </Description>
                    <Description>
                        Tamanho: o maior do Sistema Solar, 11 vezes maior que a terra.
                    </Description>
                    <Description>
                        Localização: 778.330.000 km do Sol.
                    </Description>
                    <Description>
                        Temperatura: -100°C.
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Possui seis satélites naturais.
                    </Description>
                </Header>

                <Container>
                    <Title>Banco de imagens de Júpiter</Title>

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

export default function() {
    return <PageStack Screen={Jupiter} screenname="Jupiter" />
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #A68965;
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
    background: #A68965;
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