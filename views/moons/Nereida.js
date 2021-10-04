import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../component/page.component";

function Nereida() {
  return (
    <View>
      <Text>Tela sobre Nereida</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Nereida" Screen={Nereida} />;
}
