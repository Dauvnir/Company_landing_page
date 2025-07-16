import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 2rem;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem);

	img {
		width: clamp(18rem, 6.797rem + 59.75vw, 45rem);
		height: auto;

		border-radius: 15px;
		box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
	}
	p {
		flex: 1;
		position: relative;

		text-align: left;

		display: flex;
		justify-content: center;
		align-items: center;

		span {
			position: relative;
			z-index: 2;

			color: black;
			font-size: clamp(1.5rem, 1.262rem + 1.15vw, 2rem);
		}
		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);

			width: auto;
			height: 100%;

			z-index: 1;
			box-shadow: none;
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;

			z-index: 1;

			width: 100%;
			height: 100%;

			background: rgba(255, 255, 255, 0.6);
			pointer-events: none;
		}
	}
`;

const AboutUs = () => {
	return (
		<Wrapper>
			<img src="cncTeam.jpeg" alt="teamImage" />
			<p>
				<span>
					From large-format printing and CNC cutting to custom stickers, labels, and magnets — we design, print, and create tailored solutions that
					stick. Need something unique? You can even design it yourself with our easy online creator.
				</span>
				<img src="hand.png" alt="hand" />
			</p>
		</Wrapper>
	);
};

export default AboutUs;
