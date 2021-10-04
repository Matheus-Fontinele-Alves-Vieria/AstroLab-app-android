import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Image, Text } from 'react-native';
import styled from "styled-components/native";
import { SwipeListView } from 'react-native-swipe-list-view';
import terra1 from '../../assets/images/Terra_1.jpg';
import terra2 from '../../assets/images/Terra_2.jpg';
import terra3 from '../../assets/images/Terra_3.jpg';
import terra4 from '../../assets/images/Terra_4.jpg';
import { PageStack } from '../../components/page.component';

function Terra({navigation}) {
    const [userData] = useState([
        {
            img: 'https://uploaddeimagens.com.br/images/003/151/937/full/Lua.png?1616732793',
            name: 'Lua',
            nameId: 'Lua'
        }
    ]);

    const items = [
        {
            key: String(Math.random()),
            img: terra1,
            label: "Terra 1",
        },

        {
            key: String(Math.random()),
            img: terra2,
            label: "Terra 2",
        },

        {
            key: String(Math.random()),
            img: terra3,
            label: "Terra 3",
        },

        {
            key: String(Math.random()),
            img: terra4,
            label: "Terra 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: silicatos e basaltos e a atmosfera composta por nitrogênio, oxigênio, vapor d'água e outros gases. 
                    </Description>
                    <Description>
                        Tamanho: 6378 km.
                    </Description>
                    <Description>
                        Localização: 149.600.000 km do Sol.
                    </Description>
                    <Description>
                        Temperatura: 14°C.
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Possui um a Lua.
                    </Description>
                </Header>

                <Container>
                    <Title>Banco de imagens da Terra</Title>

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
                    <Title>Satélite natural</Title>

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
    return <PageStack Screen={Terra} screenname="Terra" />
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #000080;
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
    background:  #000080;
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