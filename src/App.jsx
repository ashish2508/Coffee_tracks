import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import PayQR from "./components/PayQR";
import Stats from "./components/Stats";
import { useAuth } from "./context/AuthContext";

function App() {
	const { globalUser, globalData, isLoading } = useAuth();
	const isAuthenticated = globalUser;
	const isData = globalData && !!Object.keys(globalData || {}).length;

	const authenticatedContent = (
		<>
			<Stats />
			<History />
		</>
	);

	return (
		<Layout>
			<Hero />
			<CoffeeForm isAuthenticated={isAuthenticated} />
			{isAuthenticated && isLoading && <p>Loading Data...</p>}
			{isAuthenticated && isData && authenticatedContent}
			<PayQR />
		</Layout>
	);
}

export default App;
