import React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../component/page.component";

function Lua() {
  return (
    <View>
      <Text>Tela sobre a Lua</Text>
    </View>
  );
}

export default function () {
  return <PageStack screenname="Lua" Screen={Lua} />;
}
