import * as React from "react";
import { Image, View, KeyboardAvoidingView } from "react-native";
import { css } from "../../assets/css/Css";
import Background from "../../assets/images/background.jpg";

export default function Home() {
	return (
		<View style={css.container1}>
			<KeyboardAvoidingView style={css.container2}>
				<View style={{ zIndex: 1, position: 'absolute'}}>
					<Image source={Background}/>
				</View>

				<View style={css.view_home1}>
					<Image
						style={css.foguete}
						source={require("../../assets/images/Foguete.png")}
					/>
					<Image
						style={css.aninha}
						source={require("../../assets/images/Astronauta_Aninha.png")}
					/>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}
