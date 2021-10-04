import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../component/page.component";

function Tita() {
  return (
    <View>
      <Text>Tela sobre Titã</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Tita" Screen={Tita} />;
}
