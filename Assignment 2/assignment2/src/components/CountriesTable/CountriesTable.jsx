/* eslint-disable react/prop-types */
import "./CountriesTable.css";

const CountriesTable = ({ data }) => {

	const handleCountryDetails = () => {

	}

	return (
		<>
			<div className="countries-container">
				{
					data.map((country) => {
						return (
							<>
								<div className="countries-card">
									<img height={160} src={country.flags.png} alt="" />
									<div className="countries-row">
										<div className="countries-name">
											<p>{country.name.common}</p>

										</div>

										<div className="countries-learn-more" onClick={handleCountryDetails}>
											<p>Learn More</p>
										</div>
									</div>
								</div>

							</>
						);
					})
				}
			</div>
		</>
	);
};

export default CountriesTable;