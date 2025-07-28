import "./App.css";
import AboutUsSection from "./MainComponents/AboutUsSection";
import ContactSection from "./MainComponents/ContactSections";
import ReviewsSection from "./MainComponents/ReviewsSection";
import ServicesSection from "./MainComponents/ServicesSection";
import TrustedBySection from "./MainComponents/TrustedBySection";
import WelcomeSection from "./MainComponents/WelcomeSection";
import Footer from "./MainComponents/Footer";
import { useEffect, useState } from "react";

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
			<WelcomeSection fetchLang={fetchLang} />
			<ServicesSection isPolish={polishLang} />
			<TrustedBySection isPolish={polishLang} />
			<AboutUsSection isPolish={polishLang} />
			<ReviewsSection isPolish={polishLang} />
			<ContactSection isPolish={polishLang} />
			<Footer isPolish={polishLang} />
		</>
	);
}

export default App;
