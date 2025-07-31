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
		animation: ${slide} 75s infinite linear;

		will-change: transform;

		gap: 2rem;

		div:first-child {
			margin-left: 2rem;
		}
	}

	.reviewBlock {
		width: 18rem;
		height: 12rem;

		box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.25);

		padding: 1rem;

		border-radius: 15px;

		background-color: white;

		.review {
			width: 100%;
			height: 75%;
			font-size: 1rem;
			white-space: wrap;
			font-weight: 700;
			color: black;
		}

		div {
			width: 100%;
			height: 25%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.logo {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: left;
				align-items: center;
				position: relative;
				img {
					height: 100%;
					width: auto;
					max-width: 10rem;
					object-fit: contain;
				}
				strong {
					display: block;
					flex-grow: 1;
					text-align: right;
					color: black;
				}
			}
			/* .stars {
				height: 100%;
				width: auto;
				display: flex;
				justify-content: right;
				align-items: center;
				flex-direction: row;
			} */
		}
	}
`;
const ReviewCarousel = ({ isPolish }) => {
	return (
		<Wrapper>
			<div className="track">
				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Współpraca z ProLabel przebiegła sprawnie i profesjonalnie. Zdecydowanie godni polecenia."
							: "Cooperation with ProLabel was smooth and professional. Definitely a company worth recommending."}
					</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Katarzyna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Doceniamy terminowość realizacji oraz wysoką jakość druku. Solidny partner biznesowy."
							: "We appreciate the timely execution and high print quality. A reliable business partner."}
					</p>
					<div>
						<p className="logo">
							<img src="fmWorld_logo.png" alt="fm world" />
							<strong>Marek</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Jesteśmy bardzo zadowoleni z usług – zarówno pod względem jakości, jak i komunikacji."
							: "We are very satisfied with the service – both in terms of quality and communication."}
					</p>
					<div>
						<p className="logo">
							<img src="dronaVista_logo.png" alt="drona vista" />
							<strong>Krzysztof</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Rzetelna firma, z którą współpracujemy od dłuższego czasu. Nigdy nas nie zawiedli."
							: "A reliable company we've been cooperating with for a long time. They've never let us down."}
					</p>
					<div>
						<p className="logo">
							<img src="blackpoint_logo.png" alt="blackpoint" />
							<strong>Anna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Profesjonalna obsługa i wysoka jakość produktów – wszystko zgodnie z oczekiwaniami."
							: "Professional service and high-quality products – everything met our expectations."}
					</p>
					<div>
						<p className="logo">
							<img src="Perfand_logo.png" alt="perfand" />
							<strong>Zbigniew</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Dzięki ProLabel mogliśmy szybko zrealizować pilne zlecenie – pełna satysfakcja."
							: "Thanks to ProLabel, we were able to complete an urgent order quickly – full satisfaction."}
					</p>
					<div>
						<p className="logo">
							<img src="schilsner_logo.png" alt="schilsner" />
							<strong>Łucja</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Współpraca z ProLabel przebiegła sprawnie i profesjonalnie. Zdecydowanie godni polecenia."
							: "Cooperation with ProLabel was smooth and professional. Definitely a company worth recommending."}
					</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Katarzyna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Doceniamy terminowość realizacji oraz wysoką jakość druku. Solidny partner biznesowy."
							: "We appreciate the timely execution and high print quality. A reliable business partner."}
					</p>
					<div>
						<p className="logo">
							<img src="fmWorld_logo.png" alt="fm world" />
							<strong>Marek</strong>
						</p>
					</div>
				</div>
			</div>
			<div className="track">
				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Współpraca z ProLabel przebiegła sprawnie i profesjonalnie. Zdecydowanie godni polecenia."
							: "Cooperation with ProLabel was smooth and professional. Definitely a company worth recommending."}
					</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Katarzyna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Doceniamy terminowość realizacji oraz wysoką jakość druku. Solidny partner biznesowy."
							: "We appreciate the timely execution and high print quality. A reliable business partner."}
					</p>
					<div>
						<p className="logo">
							<img src="fmWorld_logo.png" alt="fm world" />
							<strong>Marek</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Jesteśmy bardzo zadowoleni z usług – zarówno pod względem jakości, jak i komunikacji."
							: "We are very satisfied with the service – both in terms of quality and communication."}
					</p>
					<div>
						<p className="logo">
							<img src="dronaVista_logo.png" alt="drona vista" />
							<strong>Krzysztof</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Rzetelna firma, z którą współpracujemy od dłuższego czasu. Nigdy nas nie zawiedli."
							: "A reliable company we've been cooperating with for a long time. They've never let us down."}
					</p>
					<div>
						<p className="logo">
							<img src="blackpoint_logo.png" alt="blackpoint" />
							<strong>Anna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Profesjonalna obsługa i wysoka jakość produktów – wszystko zgodnie z oczekiwaniami."
							: "Professional service and high-quality products – everything met our expectations."}
					</p>
					<div>
						<p className="logo">
							<img src="Perfand_logo.png" alt="perfand" />
							<strong>Zbigniew</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Dzięki ProLabel mogliśmy szybko zrealizować pilne zlecenie – pełna satysfakcja."
							: "Thanks to ProLabel, we were able to complete an urgent order quickly – full satisfaction."}
					</p>
					<div>
						<p className="logo">
							<img src="schilsner_logo.png" alt="schilsner" />
							<strong>Łucja</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Współpraca z ProLabel przebiegła sprawnie i profesjonalnie. Zdecydowanie godni polecenia."
							: "Cooperation with ProLabel was smooth and professional. Definitely a company worth recommending."}
					</p>
					<div>
						<p className="logo">
							<img src="allegroLogo.png" alt="allegro" />
							<strong>Katarzyna</strong>
						</p>
					</div>
				</div>

				<div className="reviewBlock">
					<p className="review">
						{isPolish
							? "Doceniamy terminowość realizacji oraz wysoką jakość druku. Solidny partner biznesowy."
							: "We appreciate the timely execution and high print quality. A reliable business partner."}
					</p>
					<div>
						<p className="logo">
							<img src="fmWorld_logo.png" alt="fm world" />
							<strong>Marek</strong>
						</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ReviewCarousel;
