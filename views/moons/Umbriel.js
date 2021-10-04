import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/page.component";

function Umbriel() {
  return (
    <View>
      <Text>Tela sobre Umbriel</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Umbriel" Screen={Umbriel} />;
}
