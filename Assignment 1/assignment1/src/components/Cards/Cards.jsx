/* eslint-disable react/prop-types */

// Local Imports
import "./Cards.css";
import Card from "../Card/Card";

const Cards = ({ data }) => {
	return (
		<>
			<div className="cards-container">
				{
					data.map((assignmentData, i) => {
						return (
							<Card key={i} data={assignmentData}/>
						);
					})
				}
			</div>
		</>
	);
};

export default Cards;