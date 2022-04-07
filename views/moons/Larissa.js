import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Larissa() {
  return (
    <View>
      <Text>Tela sobre Larissa</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Larissa" Screen={Larissa} setTitle={setTitle} />;
}
