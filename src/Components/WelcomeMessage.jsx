import styled, { keyframes } from "styled-components";

const AuraPulsing = keyframes`
  0% { 
    box-shadow: none;
}
  50% {
    box-shadow: 0 0 20px 10px rgba(190, 0, 0, 0.5);
  }
  100% {
    box-shadow: none;
  }`;
const Wrapper = styled.div`
	width: 100%;
	height: auto;

	flex-grow: 1;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem); //300 px to 1024px calculated
	header {
		width: 100%;
		height: 60%;

		display: flex;
		justify-content: end;
		align-items: start;
		flex-direction: column;

		gap: 2rem;

		cursor: default;
	}
	div {
		display: grid;
		place-items: center;

		width: 100%;
		height: 40%;
		button {
			padding: 1.5rem;

			outline: none;
			border: none;
			border-radius: 15px;

			background-color: #be0000;
			cursor: pointer;

			transition: box-shadow 0.5s ease-in-out;

			animation: ${AuraPulsing} 3s ease-in-out infinite;

			span {
				font-size: 1.5rem;
			}
		}
	}
`;
const WelcomeMessage = () => {
	return (
		<Wrapper>
			<header>
				<h1>Your Trusted Online Printing Partner</h1>
				<h2>
					Labels, stickers, and more — <br /> printed fast, delivered faster.
				</h2>
			</header>

			<div>
				<button>
					<span>Contact Us</span>
				</button>
			</div>
		</Wrapper>
	);
};

export default WelcomeMessage;
