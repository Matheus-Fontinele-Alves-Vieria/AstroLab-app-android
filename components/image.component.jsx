import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

function ImageComponent({ source }) {
	const handleClickImage = () => {};

	return (
		<TouchableOpacity onPress={() => handleClickImage(source)}>
			<Image style={styles.image} source={source} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
	},
});

export { ImageComponent };
