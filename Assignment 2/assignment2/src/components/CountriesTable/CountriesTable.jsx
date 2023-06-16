/* eslint-disable react/prop-types */

// Local Imports
import "./CountriesTable.css";
// 3rd Party Imports
import { Link } from "react-router-dom";

const CountriesTable = ({ data }) => {
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

										<div className="countries-learn-more">
											<Link to={`/name/${country.name.common}`} style={{ textDecoration: "none" }}>
												<p>Learn More</p>
											</Link>
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