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
import {
	Background,
	Container,
	Content,
	Description,
	Header,
	Image,
	ImageContainer,
	ImageTitle,
	ListImages,
	Modal,
	ModalCloseButtonModal,
	ModalContent,
	ModalGestureHandlerRootView,
	ModalImage,
	ModalPinchGestureHandler,
} from "./styles";
import TabBarButton from "../tarBarButton";
import { Animated } from "react-native";
function Page({ description, images }) {
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
			<Modal>
				<ModalContent>
					<ModalCloseButtonModal
						children={icons.Close("white", 32)}
						onPress={() => setVisible(false)}
					/>
					<ModalGestureHandlerRootView>
						<ModalPinchGestureHandler onGestureEvent={handleGestureEvent}>
							<ModalImage
								style={{
									transform: [{ scale: animatedScale }],
								}}
								source={image}
							/>
						</ModalPinchGestureHandler>
					</ModalGestureHandlerRootView>
				</ModalContent>
			</Modal>
		);
	}

	return (
		<Container>
			<Background source={images[3].img}/>
			<Content>
				<Header>
					{description.map((desc, index) => (
						<Description key={String(index)}>{desc}</Description>
					))}
				</Header>

				<ListImages
					data={images}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<ImageContainer
							onPress={() => handleClickModalOpen(item.img)}
						>
							<Image source={item.img} />
							<ImageTitle numberOfLines={1}>
								{item.label}
							</ImageTitle>
						</ImageContainer>
					)}
				></ListImages>
			</Content>
		</Container>
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

export default function ({ screenname, description, images }) {
	return (
		<PageStack screenname={screenname}>
			<Page description={description} images={images} />
		</PageStack>
	);
}
