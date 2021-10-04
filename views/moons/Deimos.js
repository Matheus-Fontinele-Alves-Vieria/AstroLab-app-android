import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/page.component";

function Deimos() {
  return (
    <View>
      <Text>Tela sobre Deimos</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Deimos" Screen={Deimos} />;
}
