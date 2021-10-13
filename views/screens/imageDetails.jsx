import * as React from "react";
import { Text, View } from "react-native";
import { PageStack } from "../../components/pageStack";

function ImageDetails({ navigation, route }) {
    console.log(Object.keys(navigation), route)

	return (
		<View>
			<Text></Text>
		</View>
	);
}

export default function ({ setTitle }) {
	return <PageStack Screen={ImageDetails} screenname="ImageDetails" setTitle={setTitle} />;
}
