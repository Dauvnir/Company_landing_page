import styled from "styled-components";
import Logos from "../Components/Logos";
const Wrapper = styled.section`
	width: 100%;
	height: auto;

	/* background-image: url("colorfulCan.png"); */
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem); //300 px to 1024px calculated
	padding-block: 2rem;

	text-align: center;

	h3 {
		margin-bottom: 2rem;
	}
`;

const TrustedBySection = ({ isPolish }) => {
	return (
		<Wrapper>
			<h3>{isPolish ? "Zaufali nam" : "Trusted by"}</h3>
			<Logos />
		</Wrapper>
	);
};

export default TrustedBySection;
