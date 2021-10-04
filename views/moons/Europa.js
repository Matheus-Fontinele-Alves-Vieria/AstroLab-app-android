import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/page.component";

function Europa() {
  return (
    <View>
      <Text>Tela sobre Europa</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Europa" Screen={Europa} />;
}
