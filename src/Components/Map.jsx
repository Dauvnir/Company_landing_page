import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: column;

	max-width: 40rem;
	height: auto;

	gap: 0.5rem;
	flex-grow: 1;

	h4,
	p {
		color: black;
		text-shadow: none;
		text-align: left;
		text-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
	}
`;

const GoogleMaps = styled.div`
	iframe {
		height: 20rem;
		width: clamp(18rem, 8.871rem + 48.69vw, 40rem);
		object-fit: contain;

		border-radius: 10px;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
	}
`;

const Placeholder = styled.div`
	height: 20rem;
	width: clamp(18rem, 8.871rem + 48.69vw, 40rem);
	border-radius: 10px;
	background: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	color: #777;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
`;

const Map = ({ isPolish }) => {
	const [shouldLoadMap, setShouldLoadMap] = useState(false);

	useEffect(() => {
		if ("requestIdleCallback" in window) {
			requestIdleCallback(() => setShouldLoadMap(true));
		} else {
			setTimeout(() => setShouldLoadMap(true), 2000);
		}
	}, []);

	return (
		<Wrapper>
			<h4>
				ProLabel <br /> Patryk Polak
			</h4>
			<p>
				ul. Mydlana 1 <br /> 51-502 Wrocław, Poland <br /> tel. +48 555 555 555 <br />
				{isPolish ? "Godziny pracy: Pon-Pt 8:00-16:00" : "Working hours: Mon-Fri 8:00-16:00"}
			</p>
			<GoogleMaps>
				{shouldLoadMap ? (
					<iframe
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=51-502,%20Mydlana%201,%20Wroc%C5%82aw+(ProLabel)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						loading="lazy"
					></iframe>
				) : (
					<Placeholder>Map loading...</Placeholder>
				)}
			</GoogleMaps>
		</Wrapper>
	);
};

export default Map;
