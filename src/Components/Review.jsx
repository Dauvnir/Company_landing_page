import styled, { keyframes } from "styled-components";
import { FaStar } from "react-icons/fa6";

const slide = keyframes`
	from{
		transform: translateX(0);
	}
	to{
		transform: translateX(-100%);
	}
`;

const Wrapper = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: start;

	flex-grow: 1;
	padding-block: 1rem;

	width: 100%;

	margin-bottom: 2rem;

	position: relative;

	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 3rem;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
		z-index: 1;
	}
	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 3rem;
		background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
		z-index: 1;
	}
	.track {
		display: inline-flex;
		width: max-content;
		text-align: left;
		animation: ${slide} 65s infinite linear;

		will-change: transform;

		gap: 2rem;

		div:first-child {
			margin-left: 2rem;
		}
	}

	.reviewBlock {
		width: 18rem;
		height: 12rem;

		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);

		padding: 1rem;

		border-radius: 15px;

		background-color: #be0000;

		.review {
			width: 100%;
			height: 75%;
			font-size: 1rem;
			white-space: wrap;
			font-weight: 700;
		}

		div {
			width: 100%;
			height: 25%;
			display: flex;
			flex-direction: row;

			.logo {
				height: 100%;
				flex-grow: 1;
				display: flex;
				justify-content: left;
				align-items: center;
				img {
					height: 100%;
					width: auto;
					object-fit: contain;
				}
				strong {
					margin-left: 0.5rem;
				}
			}
			.stars {
				height: 100%;
				width: auto;
				display: flex;
				justify-content: right;
				align-items: center;
				flex-direction: row;
			}
		}
	}
`;
const ReviewCarousel = ({ isPolish }) => {
	return (
		<Wrapper>
			<div className="track">
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
			</div>

			<div className="track">
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
				<div className="reviewBlock">
					<p className="review">Magnesy przepiękne :D Efekt przeszedł moje najśmielsze oczekiwania :o Bardzo ładnie i profesjonalnie wykonane.</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Patryk</strong>
						</p>
						<p className="stars">
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
							<FaStar color="gold" />
						</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ReviewCarousel;
