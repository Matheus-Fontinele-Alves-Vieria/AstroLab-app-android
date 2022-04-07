import * as React from "react";
import { dataSolarSystem } from "../../../constants";
import * as Components from "./styles";
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
		<Components.Container>
			<Components.Content>
				<Components.BackgroundContainer>
					<Components.BackgroundImage source={Background} />
				</Components.BackgroundContainer>

				<Components.PlanetLists
					data={solarSystemData}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<Components.PlanetItemContainer onPress={() => handleClickPlanet(item.nameId)}>
							<Components.PlanetItem>
								<Components.PlanetImage source={{uri: item.img}} />
								<Components.PlanetTitle>{item.name}</Components.PlanetTitle>
							</Components.PlanetItem>
						</Components.PlanetItemContainer>
					)}
				></Components.PlanetLists>
			</Components.Content>
		</Components.Container>
	);
}

export default SolarSystem;
