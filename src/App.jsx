import "./App.css";
import AboutUsSection from "./MainComponents/AboutUsSection";
import ContactSection from "./MainComponents/ContactSections";
import ReviewsSection from "./MainComponents/ReviewsSection";
import ServicesSection from "./MainComponents/ServicesSection";
import TrustedBySection from "./MainComponents/TrustedBySection";
import WelcomeSection from "./MainComponents/WelcomeSection";
import Footer from "./MainComponents/Footer";
function App() {
	return (
		<>
			<WelcomeSection />
			<ServicesSection />
			<TrustedBySection />
			<AboutUsSection />
			<ReviewsSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
