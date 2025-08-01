import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: auto; // auto

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 3rem;
	div {
		@media (max-width: 1023px) {
			width: clamp(20rem, 13.776rem + 33.2vw, 35rem);
		}
		width: 40%;
		height: auto;
		img {
			width: 100%;
			height: auto;

			object-fit: contain;
			object-position: center;

			border-radius: 15px;
			box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
		}
	}
	p {
		@media (max-width: 1023px) {
			width: clamp(20rem, 13.776rem + 33.2vw, 35rem);
		}
		width: 45%;
		height: auto;
		text-align: left;
		span {
			color: black;
			font-size: 1.75rem;

			text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
		}
	}
`;

const AboutUs = ({ isPolish }) => {
	return (
		<Wrapper>
			<div>
				<img id="cncTeam" src="cncTeam.jpeg" alt="teamImage" loading="lazy" />
			</div>
			<p>
				<span>
					{isPolish
						? "Od druku wielkoformatowego i cięcia CNC po spersonalizowane naklejki, etykiety i magnesy — projektujemy, drukujemy i tworzymy rozwiązania dopasowane do Twoich potrzeb. Potrzebujesz czegoś wyjątkowego? Skorzystaj z naszego prostego kreatora online i zaprojektuj to sam."
						: "From large-format printing and CNC cutting to custom stickers, labels, and magnets — we design, print, and create tailored solutions that stick. Need something unique? You can even design it yourself with our easy online creator."}
				</span>
			</p>
		</Wrapper>
	);
};

export default AboutUs;
