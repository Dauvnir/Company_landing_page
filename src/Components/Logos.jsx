import styled, { keyframes } from "styled-components";

const carousel = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-33.33%);
	}
`;

const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;

	position: relative;
	&::before {
		content: "";

		width: 5rem;
		height: 100%;

		position: absolute;
		z-index: 2;

		top: 0;
		left: 0;

		pointer-events: none;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	}
	&::after {
		content: "";

		width: 5rem;
		height: 100%;

		position: absolute;
		z-index: 2;

		top: 0;
		right: 0;

		pointer-events: none;
		background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	}

	.track {
		display: flex;
		width: fit-content;
		animation: ${carousel} 70s linear infinite;
	}

	.carousel {
		display: flex;
		gap: 4rem;

		img:last-child {
			margin-right: 4rem;
		}
	}

	img {
		height: 3rem;
		object-fit: contain;
		object-position: center;
	}
`;

const Logos = () => {
	const logos = ["blackpoint_logo.png", "dronaVista_logo.png", "fmWorld_logo.png", "Perfand_logo.png", "schilsner_logo.png"];

	return (
		<Wrapper>
			<div className="track">
				<div className="carousel">
					{logos.map((src, idx) => (
						<img key={idx} src={src} alt={`logo-${idx}`} />
					))}
				</div>
				<div className="carousel">
					{logos.map((src, idx) => (
						<img key={idx + logos.length} src={src} alt={`logo-${idx}`} />
					))}
				</div>
				<div className="carousel">
					{logos.map((src, idx) => (
						<img key={idx + logos.length} src={src} alt={`logo-${idx}`} />
					))}
				</div>
			</div>
		</Wrapper>
	);
};

export default Logos;
