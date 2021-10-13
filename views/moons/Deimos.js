import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Deimos() {
  return (
    <View>
      <Text>Tela sobre Deimos</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Deimos" Screen={Deimos} setTitle={setTitle} />;
}
