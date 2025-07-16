import "./App.css";
import AboutUsSection from "./MainComponents/AboutUsSection";
import ServicesSection from "./MainComponents/ServicesSection";
import TrustedBySection from "./MainComponents/TrustedBySection";
import WelcomeSection from "./MainComponents/WelcomeSection";
function App() {
	return (
		<>
			<WelcomeSection />
			<ServicesSection />
			<TrustedBySection />
			<AboutUsSection />
		</>
	);
}

export default App;
