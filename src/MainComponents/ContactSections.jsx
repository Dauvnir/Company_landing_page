import Map from "../Components/Map";
import Form from "../Components/Form";
import styled from "styled-components";

const Wrapper = styled.section`
	width: 100%;
	height: auto;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem);
	padding-block: 2rem;
	text-align: center;

	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: row;
	flex-wrap: wrap;

	overflow: hidden;
	gap: 4rem;

	position: relative;

	.contact {
		display: flex;
		justify-content: start;
		align-content: center;
		flex-direction: column;
		flex-wrap: nowrap;

		width: auto;
		height: auto;
	}
	.grow {
		flex-grow: 1;
		width: 100%;
		max-width: 45rem;

		gap: 2rem;
	}
	#bgImage {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;

		z-index: -1;

		display: flex;
		justify-content: right;
		align-items: center;

		&::before {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 100%;
			content: "";

			background-color: rgba(255, 255, 255, 0.75);
		}

		img {
			object-fit: contain;
		}
	}
`;

const ContactSection = () => {
	return (
		<Wrapper id="contactLink">
			<div className="contact">
				<h3>Contact</h3>
				<Form />
			</div>
			<div className="contact grow">
				<h3>Find Us</h3>
				<Map />
			</div>

			<div id="bgImage">
				<img src="colorBloom.png" alt="bgImage" />
			</div>
		</Wrapper>
	);
};

export default ContactSection;
