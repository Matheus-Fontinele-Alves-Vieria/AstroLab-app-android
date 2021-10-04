import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/screens/Home";
import Orbita from "../views/screens/Orbita";
import Videos from "../views/screens/Videos";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const icons = {
  Home: (color, size) => <FontAwesome name="home" size={size} color={color} />,
  Orbita: (color, size) => <FontAwesome name="cog" size={size} color={color} />,
  Videos: (color, size) => (
    <FontAwesome name="tags" size={size} color={color} />
  ),
};

function PageStack({ screenname, Screen }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) =>
          icons[route.name] ? icons[route.name](color, size) : null,
      })}
    >
      <Tab.Screen
        options={{ tabBarButton: () => <></> }}
        name={screenname}
        component={Screen}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orbita" component={Orbita} />
      <Tab.Screen name="Videos" component={Videos} />
    </Tab.Navigator>
  );
}

export { PageStack };
