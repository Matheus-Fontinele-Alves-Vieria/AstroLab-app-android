import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/page.component";

function Lua() {
  return (
    <View>
      <Text>Tela sobre a Lua</Text>
    </View>
  );
}

export default function ({ setTitle }) {
  return <PageStack screenname="Lua" Screen={Lua} setTitle={setTitle} />;
}
