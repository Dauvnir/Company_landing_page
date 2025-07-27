import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
const Wrapper = styled.footer`
	width: 100%;
	height: auto;

	background-color: #be0000;

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem);
	padding-top: 2rem;
	padding-bottom: 1rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	div {
		width: 100%;
		height: auto;

		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		img {
			width: clamp(12rem, 8.68rem + 17.7vw, 20rem);
			height: auto;
			object-fit: contain;
		}
		button {
			width: 4rem;
			height: 4rem;

			background-color: white;

			border-radius: 15px;
			border: none;

			cursor: pointer;

			box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.2);

			a {
				width: 100%;
				height: 100%;
				display: grid;

				place-items: center;
			}
		}
	}

	ul {
		width: clamp(18rem, -1.502rem + 104.01vw, 65rem);
		height: auto;

		list-style: none;

		display: inline-flex;
		text-align: center;
		li {
			width: 25%;

			color: white;
			font-weight: 800;
			font-size: clamp(1rem, 0.896rem + 0.55vw, 1.25rem);
			text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

			cursor: pointer;

			transition: color 0.5s ease;
			&:hover {
				color: #bebebe;
			}

			a {
				display: block;
				width: 100%;
				height: 100%;
				color: inherit;
			}
		}
	}

	#privacy,
	#copyright {
		width: 100%;
		height: auto;

		font-size: clamp(1rem, 0.896rem + 0.55vw, 1.25rem);
		text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

		u {
			cursor: pointer;
		}
	}
	#copyright {
		text-align: center;
	}
`;

const Footer = ({ isPolish }) => {
	return (
		<Wrapper>
			<div>
				<img src="logoprolabel.png" alt="ProLabel" />
				<button>
					<a href="#homeLink">
						<IoIosArrowUp color="#be0000" size={"2rem"} />
					</a>
				</button>
			</div>
			<ul>
				<li>
					<a href="#homeLink">Home</a>
				</li>
				<li>
					<a href="#servicesLink">{isPolish ? "Usługi" : "Services"}</a>
				</li>
				<li>
					<a href="#aboutusLink">{isPolish ? "O nas" : "About us"}</a>
				</li>
				<li>
					<a href="#contactLink">{isPolish ? "Kontakt" : "Contact"}</a>
				</li>
			</ul>
			<p id="privacy">
				<u>{isPolish ? "Polityka prywatności i pliki cookies" : "Privacy and cookies"}</u>
				<br />
				ul. Mydlana 1, 51-502 Wrocław, Polska
			</p>
			<p id="copyright">{isPolish ? "Wszelkie prawa zastrzeżone © ProLabel 2025" : "Copyright © ProLabel 2025"}</p>
		</Wrapper>
	);
};

export default Footer;
