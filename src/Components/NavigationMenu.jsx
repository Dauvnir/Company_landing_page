import styled, { keyframes } from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

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

const Wrapper = styled.div.withConfig({
	shouldForwardProp: (prop) => !["isMobile", "menuState"].includes(prop),
})`
	display: inline-flex;
	position: relative;

	width: 100%;
	height: 5rem;

	background-color: rgba(255, 255, 255, 0.2);
	box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);

	padding-inline: clamp(0.5rem, -0.122rem + 3.31vw, 2rem); //300 px to 1024px calculated

	img {
		height: 100%;
		width: auto;
	}

	#mobileMenu,
	#desktopMenu {
		justify-content: right;
		align-items: center;

		position: relative;

		height: 100%;
		width: auto;

		flex-grow: 1;
	}

	#mobileMenu {
		display: ${(props) => (props.isMobile ? "flex" : "none")};

		.menuIcon,
		.closeIcon {
			cursor: pointer;
			color: #be0000;
			transition: opacity 0.4s ease;
		}
		.closeIcon {
			opacity: ${(props) => (props.menuState ? 1 : 0)};
		}
		.menuIcon {
			position: absolute;
			z-index: 2;
			opacity: ${(props) => (props.menuState ? 0 : 1)};
		}
	}

	#desktopMenu {
		display: ${(props) => (props.isMobile ? "none" : "flex")};
		ul {
			display: inline-flex;
			gap: 4rem;

			margin-right: 4rem;

			li {
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
		button {
			height: 3rem;
			width: 3rem;

			padding: 0.25rem;

			background-color: #be0000;

			border: none;
			border-radius: 15px;

			cursor: pointer;

			transition: box-shadow 0.5s ease-in-out;

			animation: ${AuraPulsing} 3s ease-in-out infinite;
		}
	}
	#extendedMenu {
		position: absolute;
		z-index: 3;
		top: 5rem;
		right: ${(props) => (props.menuState ? 0 : "-100%")};

		width: 15rem;
		height: auto;

		padding: 1.5rem;
		background-color: #be0000;
		border-bottom-left-radius: 15px;

		transition: right 0.4s ease;
		ul {
			display: flex;
			align-items: left;
			justify-content: center;
			flex-direction: column;

			margin-bottom: 0.5rem;

			li {
				cursor: pointer;
				padding-block: 1rem;

				a {
					display: block;
					width: 100%;
					height: 100%;
					color: inherit;
				}
			}
		}

		button {
			height: 3rem;
			width: 3rem;

			padding: 0.25rem;

			background-color: white;

			border: none;
			border-radius: 15px;

			cursor: pointer;

			span {
				color: #be0000;
			}
		}
	}
`;

const NavigationMenu = ({ fetchLang }) => {
	const [isPolish, setPolishLang] = useState(null);
	const [width, setWidth] = useState(null);

	const [menuState, setMenuState] = useState(false);
	const menuStateHandler = () => {
		setMenuState(!menuState);
	};

	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth;
			setWidth(currentWidth);
			setIsMobile(currentWidth <= 1023);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// run only once to check if is it polish lang else use default one
	useEffect(() => {
		const lang = navigator.language;
		lang !== "pl-PL" ? setPolishLang(false) : setPolishLang(true);
	}, []);

	useEffect(() => {
		fetchLang(isPolish);
	}, [isPolish]);
	return (
		<Wrapper menuState={menuState} isMobile={isMobile}>
			<img src="logoprolabel.png" alt="Prolabel" />
			<div id="mobileMenu" onClick={menuStateHandler}>
				<IoMenu className="menuIcon" size={"3rem"} />
				<IoClose className="closeIcon" size={"3rem"} />
			</div>
			<div id="desktopMenu">
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
				<button onClick={() => setPolishLang(!isPolish)}>
					<span>{isPolish ? "PL" : "EN"}</span>
				</button>
			</div>
			<div id="extendedMenu">
				<ul onClick={menuStateHandler}>
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
				<button onClick={() => setPolishLang(!isPolish)}>
					<span>{isPolish ? "PL" : "EN"}</span>
				</button>
			</div>
		</Wrapper>
	);
};
export default NavigationMenu;
