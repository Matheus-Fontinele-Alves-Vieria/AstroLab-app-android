import * as React from "react";
import {
	BackgroundContainer,
	Container,
	Content,
	AnaImage,
	HomeImageContainer,
	RocketImage,
    Image
} from "./styles";
import Background from "../../../assets/images/background.jpg";
import Rocket from "../../../assets/images/Foguete.png";
import Aninha from "../../../assets/images/Astronauta_Aninha.png";

function Home() {
	return (
		<Container>
			<Content>
				<BackgroundContainer>
					<Image source={Background} />
				</BackgroundContainer>

				<HomeImageContainer>
					<RocketImage source={Rocket} />
					<AnaImage source={Aninha} />
				</HomeImageContainer>
			</Content>
		</Container>
	);
};

export default Home;
