import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Tita() {
  return (
    <View>
      <Text>Tela sobre Titã</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Tita" Screen={Tita} setTitle={setTitle} />;
}
