import * as React from "react";

import {
	BackgroundContainer,
	Container,
	Content,
	Icon,
	Image,
	LinkText,
	LinksContainer,
	LinksContent,
	LogoContainer,
	Paragraph,
	Title,
    LogoImage,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, Linking, TouchableOpacity, View } from "react-native";

import Background from "../../../assets/images/background.jpg";
import LogoPET from "../../../assets/images/LogoPET.png";
import LogoFNDE from "../../../assets/images/LogoFNDE.png";
import LogoIFC from "../../../assets/images/LogoIFC.png";

const icons = [
	{
		title: "Instagram",
		Icon: () => <FontAwesome name="instagram" color="red" size={24} />,
		link: "https://www.instagram.com/pet.ifc/",
	},
	{
		title: "Facebook",
		Icon: () => <FontAwesome name="facebook" color="blue" size={24} />,
		link: "https://www.facebook.com/petifccam",
	},
	{
		title: "Site",
		Icon: () => <FontAwesome name="desktop" color="green" size={24} />,
		link: "https://www.pet.ifc-camboriu.edu.br",
	},
	{
		title: "Youtube",
		Icon: () => <FontAwesome name="youtube" color="red" size={24} />,
		link: "https://www.youtube.com/c/PETIFCCamboriú",
	},
];
const logos = [LogoFNDE, LogoIFC, LogoPET];

function About() {
	const handleClickLink = async (link) => await Linking.openURL(link);

	return (
		<View>
			<BackgroundContainer>
				<Image source={Background} />
			</BackgroundContainer>

			<Content>
				<LogoContainer>
                    {logos.map(logo => (
                        <LogoImage resizeMode="contain" source={logo} />
                    ))}
                </LogoContainer>

				<Title>MATHEUS ESCREVE O TITULO</Title>

				{icons.map((icon, index) => (
					<LinksContent
						key={String(index)}
						onPress={() => handleClickLink(icon.link)}
					>
						<Icon children={icon.Icon()} />
						<LinkText>{icon.title}</LinkText>
					</LinksContent>
				))}
			</Content>
		</View>
	);
}

export default About;
