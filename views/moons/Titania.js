import React from 'react';
import { Text, View } from 'react-native';
import { PageStack } from '../../component/page.component';

function Titania() {
    return (
        <View>
            <Text>Tela sobre Titânia</Text>
        </View>
    );
}

export default function () {
    return <PageStack screenname="Titania" Screen={Titania} />;
  }