import styled from "styled-components";
import AboutUs from "../Components/AboutUs";

const Wrapper = styled.section`
	width: 100%;
	height: auto;
	text-align: center;

	margin-block: 2rem;

	overflow: hidden;

	position: relative;
	h3 {
		margin-bottom: 2rem;
	}

	#bgImg {
		position: absolute;

		bottom: 0;
		left: 50%;

		transform: translateX(-50%);
		width: auto;
		height: 50%;

		z-index: -1;

		object-fit: cover;

		@media (min-width: 1024px) {
			left: initial;
			right: 10%;
			bottom: 0;
			transform: none;
			height: 100%;
		}
	}
	#glass {
		z-index: -1;
		position: absolute;

		top: 0;
		left: 0;

		width: 100%;
		height: 100rem;

		background-color: rgba(255, 255, 255, 0.5);
	}
`;

const AboutUsSection = () => {
	return (
		<Wrapper>
			<h3>About us</h3>
			<AboutUs />
			<img id="bgImg" src="hand.png" alt="hand" />
			<div id="glass"></div>
		</Wrapper>
	);
};

export default AboutUsSection;
