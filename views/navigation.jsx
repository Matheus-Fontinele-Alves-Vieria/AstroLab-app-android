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
import TabBarButton from "../components/tabBarButton.component";
import AboutUs from "./screens/About";

// Navigation types
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ setTitle }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) =>
          icons[route.name] ? icons[route.name](color, size) : null,
        tabBarButton: (props) => (
          <TabBarButton {...props} navigation={navigation} route={route} setTitle={setTitle} />
        ),
        title: route.name
      })}
    >
      <Tab.Screen name="Astrolab" component={Home} />
      <Tab.Screen name="Sistema Solar" component={Orbita} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Sobre nós" component={AboutUs} options={{ title: "Sobre nós"}} />
    </Tab.Navigator>
  );
}


function Routes() {
  const [title, setTitle] = React.useState("Astrolab");
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title }}>
        <Stack.Screen name="Home">
          {props => <HomeStack {...props} setTitle={setTitle} />}
        </Stack.Screen>

        {/* Stars */}
        <Stack.Screen name="Sol">
        {props => <Sol {...props} setTitle={setTitle} />}
        </Stack.Screen>

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
        <Stack.Screen name="Calisto" component={Calisto} />
        <Stack.Screen name="Deimos" component={Deimos} />
        <Stack.Screen name="Encelado" component={Encelado} />
        <Stack.Screen name="Europa" component={Europa} />
        <Stack.Screen name="Fobos" component={Fobos} />
        <Stack.Screen name="Larissa" component={Larissa} />
        <Stack.Screen name="Lua" component={Lua} />
        <Stack.Screen name="Nereida" component={Nereida} />
        <Stack.Screen name="Tita" component={Tita} />
        <Stack.Screen name="Titania" component={Titania} />
        <Stack.Screen name="Umbriel" component={Umbriel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
