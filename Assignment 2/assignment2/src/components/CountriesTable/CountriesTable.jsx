/* eslint-disable react/prop-types */
import "./CountriesTable.css";

const CountriesTable = ({ data }) => {
	return (
		<>
			<div className="countries-container">
				{
					data.map((country) => {
						return (
							<>
								<div className="countries-card">
									<img src={country.flags.png} alt="" />
									<p>{country.name.common}</p>
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