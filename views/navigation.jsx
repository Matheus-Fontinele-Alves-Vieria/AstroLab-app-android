// Libs
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Pages
import Sol from "./stars/Sol";
import { icons } from "../components/page.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pages
import Home from "./screens/Home";
import Orbita from "./screens/Orbita";
import Videos from "./screens/Videos";
import Mercurio from "./planets/Mercurio";
import Netuno from "./planets/Netuno";
import Venus from "./planets/Venus";
import Terra from "./planets/Terra";
import Marte from "./planets/Marte";
import Jupiter from "./planets/Jupiter";
import Saturno from "./planets/Saturno";
import Urano from "./planets/Urano";
import Calisto from "./moons/Calisto";
import Deimos from "./moons/Deimos";
import Encelado from "./moons/Encelado";
import Europa from "./moons/Europa";
import Fobos from "./moons/Fobos";
import Larissa from "./moons/Larissa";
import Lua from "./moons/Lua";
import Nereida from "./moons/Nereida";
import Tita from "./moons/Tita";
import Titania from "./moons/Titania";
import Umbriel from "./moons/Umbriel";

// Navigation types
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) =>
          icons[route.name] ? icons[route.name](color, size) : null,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orbita" component={Orbita} />
      <Tab.Screen name="Videos" component={Videos} />
    </Tab.Navigator>
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeStack} />
        
        {/* Stars */}
        <Stack.Screen name="Sol" component={Sol} />

        {/* Planet pages */}
        <Stack.Screen name="Mercurio" component={Mercurio} />
        <Stack.Screen name="Venus" component={Venus} />
        <Stack.Screen name="Terra" component={Terra} />
        <Stack.Screen name="Marte" component={Marte} />
        <Stack.Screen name="Jupiter" component={Jupiter} />
        <Stack.Screen name="Saturno" component={Saturno} />
        <Stack.Screen name="Urano" component={Urano} />
        <Stack.Screen name="Netuno" component={Netuno} />

        {/* Moons */}
        <Stack.Screen name="Calisto" component={Calisto}/>
        <Stack.Screen name="Deimos" component={Deimos}/>
        <Stack.Screen name="Encelado" component={Encelado}/>
        <Stack.Screen name="Europa" component={Europa}/>
        <Stack.Screen name="Fobos" component={Fobos}/>
        <Stack.Screen name="Larissa" component={Larissa}/>
        <Stack.Screen name="Lua" component={Lua}/>
        <Stack.Screen name="Nereida" component={Nereida}/>
        <Stack.Screen name="Tita" component={Tita}/>
        <Stack.Screen name="Titania" component={Titania}/>
        <Stack.Screen name="Umbriel" component={Umbriel}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
