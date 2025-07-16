import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu";
import WelcomeMessage from "../Components/WelcomeMessage";
const Wrapper = styled.section`
	background-image: url("background.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	overflow: hidden;
`;

const WelcomeSection = () => {
	return (
		<Wrapper>
			<NavigationMenu />
			<WelcomeMessage />
		</Wrapper>
	);
};

export default WelcomeSection;
