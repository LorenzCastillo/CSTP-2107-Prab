// Local Imports
import "./CountryDetailsPage.css";
// 3rd Party Imports
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetailsPage = () => {

	const { name } = useParams();
	const [countryData, setCountryData] = useState({});
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		getCountriesByName();
	}, [name]);

	const getCountriesByName = async () => {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/name/${name}`
			);
			const data = await response.json();
			setCountryData(data[0]); // Update state with the first country object or an empty object
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const handleGoBack = () => {
		navigate("/");
	};

	return loading ? (
		<>
			<p>Loading...</p>
		</>
	) : (
		<>
			<div className="go-back" onClick={handleGoBack}>
				Go back
			</div>

			{/* Had to use ChatGPT to help me out with this one... If I didn't add "Object.keys" then there'd be an error.
			My suspicion has to do with how async works and how it may not be reading it in time before the page loads */}
			<div className="container">
				<div>
					<div className="country-image">
						<img height={200} src={countryData.flags.png} alt="" />
					</div>
					<div className="country-name">
						<p>{countryData.name.common}</p>
					</div>
					<div className="country-content">
						<p>Location - {countryData.subregion}</p>
						<p>Map Location - <a href={countryData.maps.googleMaps}>{countryData.maps.googleMaps}</a></p>
						<p>Population - {countryData.population} people</p>
					</div>
				</div>

			</div>
		</>
	);
};

export default CountryDetailsPage;