import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../component/page.component";

function Encelado() {
  return (
    <View>
      <Text>Tela sobre Encélado</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Encelado" Screen={Encelado} />;
}
