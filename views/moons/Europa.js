import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Europa() {
  return (
    <View>
      <Text>Tela sobre Europa</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Europa" Screen={Europa} setTitle={setTitle} />;
}
