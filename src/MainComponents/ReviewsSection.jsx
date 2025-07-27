import styled from "styled-components";
import ReviewCarousel from "../Components/Review";

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	height: auto;
	width: 100%;

	gap: 2rem;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem);

	h3 {
		text-align: center;
	}
`;

const ReviewsSection = () => {
	return (
		<Wrapper>
			<h3>Reviews</h3>
			<ReviewCarousel />
		</Wrapper>
	);
};

export default ReviewsSection;
