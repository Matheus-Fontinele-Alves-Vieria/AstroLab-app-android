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
import ImageDetails from "./screens/imageDetails";

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
					<TabBarButton
						{...props}
						navigation={navigation}
						route={route}
						setTitle={setTitle}
					/>
				),
				title: route.name,
			})}
		>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar" component={Orbita} />
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen
				name="Sobre nós"
				component={AboutUs}
				options={{ title: "Sobre nós" }}
			/>
		</Tab.Navigator>
	);
}

function Routes() {
	const [title, setTitle] = React.useState("Astrolab");
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ title, headerLeft: null }}
			>
				<Stack.Screen name="Home">
					{(props) => <HomeStack {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="ImageDetails">
					{props => <ImageDetails {...props} setTitle={setTitle} />}
				</Stack.Screen>

				{/* Stars */}
				<Stack.Screen name="Sol">
					{(props) => <Sol {...props} setTitle={setTitle} />}
				</Stack.Screen>

				{/* Planet pages */}
				<Stack.Screen name="Mercurio">
					{(props) => <Mercurio {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Venus">
					{(props) => <Venus {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Terra">
					{(props) => <Terra {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Marte">
					{(props) => <Marte {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Jupiter">
					{(props) => <Jupiter {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Saturno">
					{(props) => <Saturno {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Urano">
					{(props) => <Urano {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Netuno">
					{(props) => <Netuno {...props} setTitle={setTitle} />}
				</Stack.Screen>

				{/* Moons */}
				<Stack.Screen name="Calisto">
					{(props) => <Calisto {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Deimos">
					{(props) => <Deimos {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Encelado">
					{(props) => <Encelado {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Europa">
					{(props) => <Europa {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Fobos">
					{(props) => <Fobos {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Larissa">
					{(props) => <Larissa {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Lua">
					{(props) => <Lua {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Nereida">
					{(props) => <Nereida {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Tita">
					{(props) => <Tita {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Titania">
					{(props) => <Titania {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Umbriel">
					{(props) => <Umbriel {...props} setTitle={setTitle} />}
				</Stack.Screen>

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
