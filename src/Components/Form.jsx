import styled, { keyframes } from "styled-components";

const AuraPulsing = keyframes`
  0% { 
    box-shadow: none;
}
  50% {
    box-shadow: 0 0 10px 5px rgba(190, 0, 0, 0.5);
  }
  100% {
    box-shadow: none;
  }`;

const Wrapper = styled.form`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;

	width: clamp(20rem, 15.851rem + 22.13vw, 30rem);
	height: auto;

	padding: 2rem 1rem;
	gap: 2rem;
	border-radius: 15px;

	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
	background-color: white;

	color: black;
	font-weight: 700;

	margin-top: 2rem;
	button {
		align-self: center;

		width: 8rem;
		height: auto;

		padding: 0.75rem 0.5rem;
		border-radius: 10px;

		cursor: pointer;
		background-color: #be0000;

		color: white;
		font-weight: 700;

		animation: ${AuraPulsing} 3s ease-in-out infinite;
	}

	input {
		height: 3rem;
	}
	textarea {
		height: 10rem;
	}
	input,
	textarea {
		width: 100%;
		resize: none;

		border-radius: 10px;
		border: none;

		padding: 0.5rem;

		color: black;
		font-weight: 700;
		font-size: 1.25rem;

		background-color: #eeeeee;
		box-shadow: 0 0 1px 1px #bebebe;
	}

	input::placeholder,
	textarea::placeholder {
		color: rgba(0, 0, 0, 0, 0.65);
		font-weight: 700;
		font-size: 1.25rem;
	}

	button {
		border: none;
	}
`;
const Form = ({ isPolish }) => {
	return (
		<Wrapper>
			<input type="text" id="name" name="name" autoComplete="off" placeholder={isPolish ? "Imię i nazwisko" : "Name and surname"} />
			<input type="text" id="phone" name="phone" autoComplete="off" placeholder={isPolish ? "Numer telefonu" : "Phone number"} />
			<input type="text" id="email" name="email" autoComplete="off" placeholder={isPolish ? "Adres e-mail" : "Email address"} />
			<textarea name="message" id="message" autoComplete="off" placeholder={isPolish ? "Wiadomość" : "Message"}></textarea>
			<button type="submit">
				<span>{isPolish ? "Wyślij" : "Send"}</span>
			</button>
		</Wrapper>
	);
};

export default Form;
