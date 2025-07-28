import { useEffect, useState } from "react";
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
	position: relative;

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
	#error {
		width: 100%;
		height: auto;
		border-radius: 10px;

		background-color: #eeeeee;
		box-shadow: 0 0 1px 1px #bebebe;

		color: #be0000;
		text-shadow: none;

		padding: 0.5rem;
	}
	.hidden {
		display: none !important;
	}

	#confirmMessage {
		position: absolute;

		z-index: 2;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 15px;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		gap: 2rem;
		p {
			width: 100%;
			height: auto;
		}
	}
`;
const Form = ({ isPolish }) => {
	const [error, setError] = useState(null);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^[0-9\-\+]{9,15}$/;

		if (!formData.name.trim()) {
			setError("Name is required");
			return false;
		}

		if (!phoneRegex.test(formData.phone)) {
			setError("Invalid phone number");
			return false;
		}

		if (!emailRegex.test(formData.email)) {
			setError("Invalid email address");
			return false;
		}

		if (!formData.message.trim()) {
			setError("Message cannot be empty");
			return false;
		}

		setError("");
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log("Form is valid", formData);
			setShowConfirmation(true);
			setFormData({ name: "", phone: "", email: "", message: "" });
		}
	};

	const hideMessage = () => {
		setShowConfirmation(false);
	};
	return (
		<Wrapper>
			<p id="error" className={error ? "" : "hidden"}>
				{error}
			</p>
			<input
				type="text"
				id="name"
				name="name"
				autoComplete="off"
				placeholder={isPolish ? "Imię i nazwisko" : "Name and surname"}
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<input
				type="tel"
				id="phone"
				name="phone"
				autoComplete="off"
				placeholder={isPolish ? "Numer telefonu" : "Phone number"}
				value={formData.phone}
				onChange={handleChange}
				pattern="[0-9\-\+]{9,15}"
				required
			/>

			<input
				type="email"
				id="email"
				name="email"
				autoComplete="off"
				placeholder={isPolish ? "Adres e-mail" : "Email address"}
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<textarea
				name="message"
				id="message"
				autoComplete="off"
				placeholder={isPolish ? "Wiadomość" : "Message"}
				value={formData.message}
				onChange={handleChange}
				required
			/>
			<button type="submit" onClick={handleSubmit}>
				<span>{isPolish ? "Wyślij" : "Send"}</span>
			</button>

			{showConfirmation && (
				<div id="confirmMessage">
					<p>{isPolish ? "Wiadomość została pomyślnie wysłana" : "Message was successfully delivered."}</p>
					<button onClick={hideMessage}>Ok</button>
				</div>
			)}
		</Wrapper>
	);
};

export default Form;
