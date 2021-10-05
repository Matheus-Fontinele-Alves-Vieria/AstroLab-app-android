// Libs
import * as React from "react";
import { Text, View, StyleSheet, Linking, Alert, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import LogoPET from "../../assets/images/LogoPET.png";
import LogoIFC from "../../assets/images/LogoIFC.png";
import LogoFNDE from "../../assets/images/LogoFNDE.png";
import Background from "../../assets/images/background.jpg";

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
			<View style={{ zIndex: 1, position: 'absolute'}}>
				<Image source={Background} />
			</View>
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
								color={"red"}
							/>
						</View>
						<Text style={styles.linkText} onPress={() => handleClickLink("Instagram")}>
							Instagram
						</Text>
					</View>

					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="facebook"
								size={24}
								color={"blue"}
							/>
						</View>

						<Text style={styles.linkText} onPress={() => handleClickLink("Facebook")}>
							Facebook
						</Text>
					</View>

					<View style={styles.links}>
						<View style={styles.linkIcon}>
							<FontAwesome
								style={{ alignSelf: "center" }}
								name="desktop"
								size={24}
								color={"green"}
							/>
						</View>

						<Text style={styles.linkText} onPress={() => handleClickLink("Site")}>
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

						<Text style={styles.linkText} onPress={() => handleClickLink("Youtube")}>
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
		paddingLeft: 0,
		position: 'absolute',
		zIndex: 10
	},

	title: {
		fontSize: 36,
		fontWeight: "700",
		color: "#fff",
		paddingLeft: 15
	},

	paragraph: {
		color: "#fff",
		fontSize: 18,
		paddingBottom: 0,
		paddingLeft: 15,
		marginBottom: 10
	},

	linksContainer: {
		flexDirection: "column",
		paddingLeft: 15
	},

	links: {
		flexDirection: "row",
		alignItems: "center",
		margin: 3
	},

	linkText: {
		color: "#fff",
		fontSize: 18,
		marginLeft: 5
	},	

	linkIcon: {
		width: 50,
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center"
	},
	
	logoContainer: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		paddingVertical: 15,
		backgroundColor: "#FFF"
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
