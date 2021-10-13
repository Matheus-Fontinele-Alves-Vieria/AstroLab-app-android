import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Fobos() {
  return (
    <View>
      <Text>Tela sobre Fobos</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Fobos" Screen={Fobos} setTitle={setTitle} />;
}
