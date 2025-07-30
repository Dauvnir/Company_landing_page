import "./App.css";
import AboutUsSection from "./MainComponents/AboutUsSection";
import ContactSection from "./MainComponents/ContactSections";
import ReviewsSection from "./MainComponents/ReviewsSection";
import ServicesSection from "./MainComponents/ServicesSection";
import TrustedBySection from "./MainComponents/TrustedBySection";
import WelcomeSection from "./MainComponents/WelcomeSection";
import Footer from "./MainComponents/Footer";
import { useEffect, useState } from "react";
import AnimateSections from "./Components/AnimateSections";
//lang => isPolish  true or false
function App() {
	const [polishLang, setPolishLang] = useState(false);

	const fetchLang = (arg) => {
		setPolishLang(arg);
	};

	// useEffect(() => {
	// 	console.log(polishLang);
	// }, [polishLang]);

	return (
		<>
			<WelcomeSection fetchLang={fetchLang} isPolish={polishLang} />
			<AnimateSections>
				<ServicesSection isPolish={polishLang} />
			</AnimateSections>
			<AnimateSections>
				<TrustedBySection isPolish={polishLang} />
			</AnimateSections>
			<AnimateSections>
				<AboutUsSection isPolish={polishLang} />
			</AnimateSections>
			<AnimateSections>
				<ReviewsSection isPolish={polishLang} />
			</AnimateSections>
			<AnimateSections>
				<ContactSection isPolish={polishLang} />
			</AnimateSections>
			<Footer isPolish={polishLang} />
		</>
	);
}

export default App;
