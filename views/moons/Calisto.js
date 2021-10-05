import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PageStack } from '../../components/page.component';

function Calisto() {
    return (
        <View>
            <Text>Tela sobre Calisto</Text>
        </View>
    );
}

export default function({ setTitle }){
    return <PageStack screenname="Calisto" Screen={Calisto} setTitle={setTitle} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    content: {
        position: 'absolute'
    },

    backgroundImage: {
        position: 'absolute',
    }
})