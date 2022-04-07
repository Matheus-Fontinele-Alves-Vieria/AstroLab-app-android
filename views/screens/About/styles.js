import styled from "styled-components/native";

export const Image = styled.Image``;

export const LogoImage = styled.Image.attrs(({ resizeMode }) => { resizeMode })`
	width: 170px;
	height: 130px;
	margin: 8px;
`;

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const BackgroundContainer = styled.View``;

export const Content = styled.View`
	padding-left: 0;
	position: absolute;
	z-index: 10;
`;

export const LogoContainer = styled.View`
	width: 100%;
	height: 300px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding: 8px 16px;
	background-color: #fff;
`;

export const Title = styled.Text`
	font-size: 36;
	font-weight: 700;
	color: #fff;
	padding-left: 15;
`;

export const Paragraph = styled.Text`
	color: "#fff";
	font-size: 18;
	padding-bottom: 0;
	padding-left: 15;
	margin-bottom: 10;
`;

export const LinksContainer = styled.View`
	flex-direction: "column";
	padding-left: 15;
`;

export const LinksContent = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin: 4px 12px;
`;

export const Icon = styled.View.attrs(({ children }) => {
	children;
})`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	align-items: center;
	justify-content: center;
	background-color: #fff;
`;

export const LinkText = styled.Text`
	color: #fff;
	font-size: 18px;
	margin-left: 5px;
`;
