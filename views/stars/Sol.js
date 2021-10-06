import React from "react";
import {
	Animated,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import styled from "styled-components/native";
import sol1 from "../../assets/images/Sol_1.jpg";
import sol2 from "../../assets/images/Sol_2.jpg";
import sol3 from "../../assets/images/Sol_3.jpg";
import sol4 from "../../assets/images/Sol_4.jpg";
import { PageStack } from "../../components/page.component";
import { FontAwesome } from "@expo/vector-icons";
import {
	GestureHandlerRootView,
	PinchGestureHandler,
} from "react-native-gesture-handler";
function SolPage() {
	const items = [
		{
			key: String(Math.random()),
			img: sol1,
			label: "Sol 1",
		},

		{
			key: String(Math.random()),
			img: sol2,
			label: "Sol 2",
		},

		{
			key: String(Math.random()),
			img: sol3,
			label: "Sol 3",
		},

		{
			key: String(Math.random()),
			img: sol4,
			label: "Sol 4",
		},
	];

	const [visible, setVisible] = React.useState(false);
	const [selectedImage, setSelectedImage] = React.useState();
	const animatedScale = React.useRef(new Animated.Value(1)).current;

	const handleClickOpenModal = (image) => {
		setVisible(true);
		setSelectedImage(image);
	};
	const handleClickCloseModal = () => setVisible(false);
	const handleGesture = Animated.event(
		[{ nativeEvent: { scale: animatedScale } }],
		{ useNativeDriver: true }
	);

	return (
		<View>
			<Header>
				<Description>
					Composição: Hidrogênio (aproximadamente 90%) e Hélio (9%).
				</Description>
				<Description>Tamanho: 109 vezes maior que a Terra.</Description>
				<Description>
					Localização: Via Láctea/ estrela central/ Distância da
					Terra: 149.600.000 km.
				</Description>
				<Description>Temperatura: 5504,85 ºC.</Description>
			</Header>

			<Container>
				<Title>Banco de imagens do Sol</Title>

				<Card>
					{items.map((item) => (
						<View key={item.key}>
							<CardImageCover>
								<TouchableOpacity
									onPress={() =>
										handleClickOpenModal(item.img)
									}
								>
									<CardImage source={item.img} />
								</TouchableOpacity>
								<CardDescription>{item.label}</CardDescription>
							</CardImageCover>
						</View>
					))}
				</Card>
			</Container>

			{visible && (
				<View style={styles.imageContainer}>
					<TouchableOpacity
						style={styles.closeModalButton}
						onPress={handleClickCloseModal}
					>
						<FontAwesome name="close" size={24} color="white" />
					</TouchableOpacity>
					<GestureHandlerRootView>
						<PinchGestureHandler onGestureEvent={handleGesture}>
							<Animated.Image
								style={[
									styles.image,
									{ transform: [{ scale: animatedScale }] },
								]}
								source={selectedImage}
							/>
						</PinchGestureHandler>
					</GestureHandlerRootView>
				</View>
			)}
		</View>
	);
}

export default function ({ setTitle }) {
	return <PageStack Screen={SolPage} screenname="Sol" setTitle={setTitle} />;
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
	imageContainer: {
		position: "absolute",
		width: window.width,
		height: window.height,
		backgroundColor: "black",
		opacity: 0.7,
	},

	closeModalButton: {
		margin: 12,
		width: 18,
		height: 18,
		alignSelf: "flex-end",
	},

	image: {
		width: window.width,
		height: window.height,
		resizeMode: "contain",
	},
});

const Header = styled.View`
	margin-top: 10px;
	padding: 10px 20px;
	background-color: #daa520;
	border-radius: 20px;
`;

const Description = styled.Text`
	color: #fff;
	margin-top: 20px;
	font-size: 18px;
	font-weight: 700;
	line-height: 22px;
`;

const Card = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		alignItems: "center",
	},
}))``;

const CardImageCover = styled.View`
	width: 200px;
	height: 250px;
	background: #daa520;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	margin-right: 16px;
`;

const CardImage = styled.Image.attrs(() => ({
	resizeMode: "contain",
}))`
	width: 185px;
	height: 185px;
`;

const CardDescription = styled.Text`
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	margin-top: 20px;
`;

const Container = styled.ScrollView`
	margin-top: 55px;
`;

const Title = styled.Text`
	color: #808080;
	font-weight: bold;
	font-size: 20px;
	margin-bottom: 20px;
`;
