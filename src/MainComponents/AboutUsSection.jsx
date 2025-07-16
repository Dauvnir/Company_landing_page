import styled from "styled-components";
import AboutUs from "../Components/AboutUs";

const Wrapper = styled.section`
	width: 100%;
	height: auto;
	text-align: center;

	margin-inline: auto;
	margin-block: 2rem;

	overflow: hidden;
	h3 {
		margin-bottom: 2rem;
	}
`;

const AboutUsSection = () => {
	return (
		<Wrapper>
			<h3>About us</h3>
			<AboutUs />
		</Wrapper>
	);
};

export default AboutUsSection;
