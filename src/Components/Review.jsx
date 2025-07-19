import styled from "styled-components";

const Wrapper = styled.div`
	height: 100%;
	width: max-content;

	position: relative;

	display: inline-flex;
	justify-content: center;
	align-items: center;

	gap: 3rem;

	&::before {
		content: "";

		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		width: 100%;
		height: 100%;

		background-image: url("colorBloom.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	&::after {
		content: "";

		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		width: 100%;
		height: 100%;

		background: rgba(255, 255, 255, 0.6);
		pointer-events: none;
	}

	p:first-child {
		margin-left: 3rem;
	}
	p {
		width: 15rem;
		height: 15rem;
		background-color: red;
		border-radius: 15px;
	}
`;

const Review = () => {
	return (
		<Wrapper>
			<p>Hello world</p>
			<p>Hello world</p>
			<p>Hello world</p>

			<p>Hello world</p>
			<p>Hello world</p>
			<p>Hello world</p>
		</Wrapper>
	);
};

export default Review;
