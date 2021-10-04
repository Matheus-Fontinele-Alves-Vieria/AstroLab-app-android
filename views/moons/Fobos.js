import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/page.component";

function Fobos() {
  return (
    <View>
      <Text>Tela sobre Fobos</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Fobos" Screen={Fobos} />;
}
