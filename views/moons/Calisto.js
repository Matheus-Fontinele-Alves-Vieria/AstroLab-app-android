import React from 'react';
import { Text, View } from 'react-native';
import { PageStack } from '../../component/page.component';

function Calisto() {
    return (
        <View>
            <Text>Tela sobre Calisto</Text>
        </View>
    );
}

export default function(){
    return <PageStack screenname="Calisto" Screen={Calisto} />
}