import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: auto;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
	gap: 6rem;

	margin-top: 2rem;

	position: relative;
	z-index: 1;

	.service {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		justify-self: center;

		width: 15.5rem;
		height: 15.5rem;

		border-radius: 15px;
		padding: 1rem;

		background-color: #be0000;
		box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);

		text-align: center;

		z-index: 2;

		img {
			width: 4rem;
			height: 4rem;
		}
		p {
			flex-grow: 1;
			overflow: hidden;
		}
	}

	#image {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.5);
		}

		img {
			height: 100%;
			width: 100%;
			object-position: center;
			object-fit: contain;
		}

		@media (max-width: 999px) {
			img {
				display: none;
			}
		}
	}

	@media (min-width: 0px) {
		grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
		justify-content: center;
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(3, 15.5rem);
		justify-content: center;
	}
`;

const Services = () => {
	return (
		<Wrapper>
			<div className="service">
				<img src="plotter.png" alt="plotter" />
				<h4>Plotter Printing</h4>
				<p>Large-format prints for banners, posters, stickers & more.</p>
			</div>
			<div className="service">
				<img src="cnc.png" alt="cnc" />
				<h4>CNC Cutting</h4>
				<p>Precision cutting for cardboard, PVC, foam, vinyl & more.</p>
			</div>
			<div className="service">
				<img src="thinkingBubble.png" alt="Custom_requests" />
				<h4>Custom Requests</h4>
				<p>Got something unique in mind? Let’s make it happen.</p>
			</div>
			<div className="service">
				<img src="design2.png" alt="plotter" />
				<h4>Sticker Design</h4>
				<p>Got something unique in mind? Let’s make it happen.</p>
			</div>
			<div className="service">
				<img src="design.png" alt="plotter" />
				<h4>Personal Creator</h4>
				<p>Design your own stickers, labels & more — right on our website.</p>
			</div>
			<div className="service">
				<img src="magnet.png" alt="plotter" />
				<h4>Magnetic Products</h4>
				<p>Fully custom magnets — from print to cut, ready for display or promo use.</p>
			</div>
			<div id="image">
				<img src="ABOUT2.png" alt="" />
			</div>
		</Wrapper>
	);
};

export default Services;
