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

	position: relative;
	&::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

const WelcomeSection = ({ fetchLang, isPolish }) => {
	return (
		<Wrapper id="homeLink">
			<NavigationMenu fetchLang={fetchLang} />
			<WelcomeMessage isPolish={isPolish} />
		</Wrapper>
	);
};

export default WelcomeSection;
