import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Image, Text } from 'react-native';
import styled from "styled-components/native";
import { SwipeListView } from 'react-native-swipe-list-view';
import marte1 from '../../assets/images/Marte_1.jpg';
import marte2 from '../../assets/images/Marte_2.jpg';
import marte3 from '../../assets/images/Marte_3.jpeg';
import marte4 from '../../assets/images/Marte_4.jpg';
import { PageStack } from '../../components/page.component';

function Marte({navigation}) {
    const [userData] = useState([
        {
            img: 'https://uploaddeimagens.com.br/images/003/162/911/full/Fobos.png?1617036981',
            name: 'Fobos',
            nameId: 'Fobos'
        },

        {
            img: 'https://uploaddeimagens.com.br/images/003/162/919/full/Deimos.png?1617037037',
            name: 'Deimos',
            nameId: 'Deimos'
        }
    ]);

    const items = [
        {
            key: String(Math.random()),
            img: marte1,
            label: "Marte 1",
        },

        {
            key: String(Math.random()),
            img: marte2,
            label: "Marte 2",
        },

        {
            key: String(Math.random()),
            img: marte3,
            label: "Marte 3",
        },

        {
            key: String(Math.random()),
            img: marte4,
            label: "Marte 4",
        },
    ];

    return (
        <View>
            <ScrollView>
                <Header>
                    <Description>
                        Composição: silicatos e basaltos e a atmosfera composta por gás carbônico, nitrogênio, monóxido de carbono e vestígios de oxigênio. 
                    </Description>
                    <Description>
                        Tamanho: maior que a metade do nosso planeta. 
                    </Description>
                    <Description>
                        Localização: 227.940.000 km de distância do Sol.
                    </Description>
                    <Description>
                        Temperatura: entre -76°C e -10°C.
                    </Description>
                    <Description>
                        Presença ou não de Satélites: Possui dois satélites naturais.
                    </Description>
                </Header>

                <Container>
                    <Title>Banco de imagens de Marte</Title>

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
                    <Title>Satélites naturais</Title>

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

export default function({ setTitle }){
    return <PageStack Screen={Marte} screenname="Marte" setTitle={setTitle} />
}

const Header = styled.View`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #cf0e0e;
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
    background: #cf0e0e;
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