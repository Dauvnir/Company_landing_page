import styled from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
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
					color: #d8d8d8;
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

			transition: box-shadow 0.5s ease;
			&:hover {
				box-shadow: 0px 0px 20px 10px rgba(190, 0, 0, 0.2);
			}
		}
	}
	#extendedMenu {
		position: absolute;
		z-index: 2;
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

const NavigationMenu = () => {
	const [menuState, setMenuState] = useState(false);
	const menuStateHandler = () => {
		setMenuState(!menuState);
	};

	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const width = window.innerWidth;
		width && width > 1023 ? setIsMobile(false) : setIsMobile(true);
	}, []);

	return (
		<Wrapper menuState={menuState} isMobile={isMobile}>
			<img src="logoprolabel.png" alt="Prolabel" />
			<div id="mobileMenu" onClick={menuStateHandler}>
				<IoMenu className="menuIcon" size={"3rem"} />
				<IoClose className="closeIcon" size={"3rem"} />
			</div>
			<div id="desktopMenu">
				<ul>
					<li>Home</li>
					<li>Services</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<button>
					<span>PL</span>
				</button>
			</div>
			<div id="extendedMenu">
				<ul>
					<li>Home</li>
					<li>Services</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<button>
					<span>PL</span>
				</button>
			</div>
		</Wrapper>
	);
};
export default NavigationMenu;
