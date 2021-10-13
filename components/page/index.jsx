// Others libs
import * as React from "react";

// Pages and libs for PageStack Component
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons } from "../../constants/index";
import AboutUs from "../../views/screens/About";
import Home from "../../views/screens/Home";
import SolarSystem from "../../views/screens/SolarSystem";
import Videos from "../../views/screens/Videos";

// Imports for Page components
import * as Components from "./styles";
import TabBarButton from "../tarBarButton";
import { Animated } from "react-native";
function Page({ description, images, moons }) {
	const [visible, setVisible] = React.useState(false);
	const [image, setImage] = React.useState({});

	const animatedScale = React.useRef(new Animated.Value(1)).current;

	const handleClickModalOpen = (image) => {
		setImage(image);
		setVisible(true);
	};

	const handleGestureEvent = Animated.event(
		[{ nativeEvent: { scale: animatedScale } }],
		{ useNativeDriver: true }
	);

	if (visible) {
		return (
			<Components.Modal>
				<Components.ModalContent>
					<Components.ModalCloseButtonModal
						children={icons.Close("white", 32)}
						onPress={() => setVisible(false)}
					/>
					<Components.ModalGestureHandlerRootView>
						<Components.ModalPinchGestureHandler
							onGestureEvent={handleGestureEvent}
						>
							<Components.ModalImage
								style={{
									transform: [{ scale: animatedScale }],
								}}
								source={
									typeof image === "string"
										? { uri: image }
										: image
								}
							/>
						</Components.ModalPinchGestureHandler>
					</Components.ModalGestureHandlerRootView>
				</Components.ModalContent>
			</Components.Modal>
		);
	}

	return (
		<Components.Container>
			<Components.Background source={images[1].img} />
			<Components.Content>
				<Components.Header>
					{description.map((desc, index) => (
						<Components.Description key={String(index)}>
							{desc}
						</Components.Description>
					))}
				</Components.Header>

				<Components.Header>
					<Components.Description>Imagens</Components.Description>
				</Components.Header>

				<Components.ListImages
					data={images}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<Components.ImageContainer
							onPress={() => handleClickModalOpen(item.img)}
						>
							<Components.Image source={item.img} />
							<Components.ImageTitle numberOfLines={1}>
								{item.label}
							</Components.ImageTitle>
						</Components.ImageContainer>
					)}
				/>

				<Components.Header>
					<Components.Description>Lua(s)</Components.Description>
				</Components.Header>

				<Components.ListImages
					data={moons}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<Components.ImageContainer
							onPress={() => handleClickModalOpen(item.img)}
						>
							<Components.Image source={{ uri: item.img }} />
							<Components.ImageTitle numberOfLines={1}>
								{item.label}
							</Components.ImageTitle>
						</Components.ImageContainer>
					)}
				/>
			</Components.Content>
		</Components.Container>
	);
}

const Tab = createBottomTabNavigator();
function PageStack({ children, screenname }) {
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
						setTitle={() => {}}
					/>
				),
			})}
		>
			<Tab.Screen
				name={screenname}
				options={{ tabBarButton: () => <></> }}
			>
				{(props) => children}
			</Tab.Screen>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar" component={SolarSystem} />
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen name="Sobre nós" component={AboutUs} />
		</Tab.Navigator>
	);
}

export default function ({ screenname, description, images, moons }) {
	return (
		<PageStack screenname={screenname}>
			<Page description={description} images={images} moons={moons} />
		</PageStack>
	);
}
