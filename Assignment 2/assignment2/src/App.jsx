// Local Imports
import "./App.css";
import Countries from "./pages/CountriesPage/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage/CountryDetailsPage";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";

function App() {
	let route = useRoutes([
		{
			path: "/",
			element: <Countries />
		},
		{
			path: "/name/:name",
			element: <CountryDetailPage />
		}
	]);

	return route;
}

export default App;