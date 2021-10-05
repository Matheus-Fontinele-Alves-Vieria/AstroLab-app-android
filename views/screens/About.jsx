// Libs
import * as React from "react";
import { Text, View, StyleSheet, Linking, Alert, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import LogoPET from "../../assets/images/LogoPET.png";
import LogoIFC from "../../assets/images/LogoIFC.png";
import LogoFNDE from "../../assets/images/LogoFNDE.png";

const links = {
	Instagram: "https://www.instagram.com/pet.ifc/",
	Facebook: "https://www.facebook.com/petifccam",
	Site: "https://www.pet.ifc-camboriu.edu.br",
	Youtube: "https://www.youtube.com/c/PETIFCCamboriú",
};

function AboutUs() {
	const handleClickLink = async (origin) => {
		if (links[origin]) {
			await Linking.openURL(links[origin]);
		} else {
			Alert.alert("Opção inválida!");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.logoContainer}>
					<Image style={styles.logoFNDE} source={LogoFNDE} />
					<Image style={styles.logoIFC} source={LogoIFC} />
					<Image style={styles.logoPET} source={LogoPET} />
				</View>

				<Text style={styles.title}>Titulo</Text>
				<Text style={styles.paragraph}>
					Motivo da criação do App, Matheus faz essa parte por que não
					li nada a respeito dele, desculpa
				</Text>

				<View style={styles.linksContainer}>
					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="instagram"
								size={24}
								color={"pink"}
							/>
						</View>
						<Text onPress={() => handleClickLink("Instagram")}>
							Instagram
						</Text>
					</View>

					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="facebook"
								size={24}
								color={"darkblue"}
							/>
						</View>

						<Text onPress={() => handleClickLink("Facebook")}>
							Facebook
						</Text>
					</View>

					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="desktop"
								size={24}
								color={"lightgreen"}
							/>
						</View>

						<Text onPress={() => handleClickLink("Site")}>
							Site
						</Text>
					</View>

					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="youtube"
								size={24}
								color={"red"}
							/>
						</View>

						<Text onPress={() => handleClickLink("Youtube")}>
							Youtube
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	content: {
		paddingLeft: 15,
	},
	title: {
		fontSize: 36,
		fontWeight: "700",
	},
	paragraph: {
		fontSize: 18,
		paddingBottom: 15,
	},

	linksContainer: {
		flexDirection: "column",
	},

	links: {
		flexDirection: "row",
	},
	linkIcon: {
		width: 50,
		height: 50,
	},
	logoContainer: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		paddingVertical: 15,
	},
	logoFNDE: {
		margin: 15,
	},
	logoIFC: {
		width: 200,
		height: 100,
		margin: 15,
	},
	logoPET: {
		width: 150,
		height: 100,
		margin: 15,
	},
});

export default AboutUs;
