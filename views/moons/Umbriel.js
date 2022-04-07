import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function Umbriel() {
  return (
    <View>
      <Text>Tela sobre Umbriel</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Umbriel" Screen={Umbriel} setTitle={setTitle} />;
}
