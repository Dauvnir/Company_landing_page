import styled from "styled-components";
import Services from "../Components/Services";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: auto;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem); //300 px to 1024px calculated
	margin-block: 2rem; // to change

	overflow: hidden;

	h3 {
		width: 100%;
		text-align: center;
	}
`;

const ServicesSection = ({ isPolish }) => {
	return (
		<Wrapper id="servicesLink">
			<h3>{isPolish ? "Usługi" : "Services"}</h3>
			<Services isPolish={isPolish} />
		</Wrapper>
	);
};

export default ServicesSection;
