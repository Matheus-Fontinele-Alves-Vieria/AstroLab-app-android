import * as React from "react";
import { dataSolarSystem } from "../../../constants";
import {
	BackgroundContainer,
	BackgroundImage,
	Container,
	Content,
	PlanetImage,
	PlanetItem,
	PlanetItemContainer,
	PlanetLists,
	PlanetTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/core";

import Background from "../../../assets/images/background.jpg";

function SolarSystem() {
    const navigation = useNavigation();

	const [solarSystemData, setSolarSystemData] = React.useState([]);

    const handleClickPlanet = (name) => navigation.navigate(name); 

	React.useEffect(() => {
		setSolarSystemData(dataSolarSystem);
	});

	return (
		<Container>
			<Content>
				<BackgroundContainer>
					<BackgroundImage source={Background} />
				</BackgroundContainer>

				<PlanetLists
					data={solarSystemData}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<PlanetItemContainer onPress={() => handleClickPlanet(item.nameId)}>
							<PlanetItem>
								<PlanetImage source={{uri: item.img}} />
								<PlanetTitle>{item.name}</PlanetTitle>
							</PlanetItem>
						</PlanetItemContainer>
					)}
				></PlanetLists>
			</Content>
		</Container>
	);
}

export default SolarSystem;
