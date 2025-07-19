import styled from "styled-components";
import ReviewCarousel from "../Components/Review";

const Wrapper = styled.section`
	height: 20rem;
	width: 100%;

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
