import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/screens/Home";
import Orbita from "../views/screens/Orbita";
import Videos from "../views/screens/Videos";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TabBarButton from "./tabBarButton.component";
import AboutUs from "../views/screens/About";

const Tab = createBottomTabNavigator();

export const icons = {
	Astrolab: (color, size) => (
		<FontAwesome name="home" size={size} color={color} />
	),
	"Sistema Solar": (color, size) => (
		<Ionicons name="planet" size={size} color={color} />
	),
	Videos: (color, size) => (
		<FontAwesome name="video-camera" size={size} color={color} />
	),
	"Sobre nós": (color, size) => (<FontAwesome name="info" size={size} color={color} />)
};

function PageStack({ screenname, Screen, setTitle }) {
	return (
		<Tab.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, size }) =>
					icons[route.name] ? icons[route.name](color, size) : null,
				tabBarButton: (props) => (
					<TabBarButton
						{...props}
						navigation={navigation}
						route={route}
						setTitle={setTitle}
					/>
				),
			})}
		>
			<Tab.Screen
				options={{ tabBarButton: () => <></> }}
				name={screenname}
				component={Screen}
			/>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar" component={Orbita} />
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen name="Sobre nós" component={AboutUs} />
		</Tab.Navigator>
	);
}

export { PageStack };
