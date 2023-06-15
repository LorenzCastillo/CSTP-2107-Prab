import { useEffect, useState } from "react";
import CountriesTable from "../../components/CountriesTable/CountriesTable";
import "./Countries.css";

const Countries = () => {
	const [countryData, setCountryData] = useState([]);

	const getCountries = async () => {
		const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
		const data = await response.json();
		setCountryData(data);
	};

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<>
			<div className="flex">
				<div>
					<CountriesTable data={countryData} />
				</div>
			</div>
		</>
	);
};

export default Countries;