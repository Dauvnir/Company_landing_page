import styled from "styled-components";
import Review from "../Components/Review";

const Wrapper = styled.section`
	text-align: center;
	height: 35rem;
`;

const ReviewsSection = () => {
	return (
		<Wrapper>
			<h3>Reviews</h3>
			<Review />
		</Wrapper>
	);
};

export default ReviewsSection;
