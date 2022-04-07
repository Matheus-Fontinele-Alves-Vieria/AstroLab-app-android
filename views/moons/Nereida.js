import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Nereida() {
  return (
    <View>
      <Text>Tela sobre Nereida</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Nereida" Screen={Nereida} setTitle={setTitle} />;
}
