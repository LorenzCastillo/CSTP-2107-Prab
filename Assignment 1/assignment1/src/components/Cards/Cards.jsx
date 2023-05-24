/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ data }) => {
	return (
		<>	
			<div className="cards-container">
				{
					data.map((assignmentData) => {
						return <Card data={assignmentData}/>
					})
				}
			</div>
		</>
	);
}

export default Cards;