/* eslint-disable react/prop-types */

// Local Imports
import "./Card.css";

const Card = ({ key, data }) => {
	return (
		<>
			<div className="card-container">
				<div className="card-image-container">
					<img className="card-image" src={data.avatar} alt=""/>
				</div>
				<div className="card-bottom">
					<h1>{data.first_name}</h1>
					<p>{data.email}</p>
				</div>
			</div>
		</>
	);
};

export default Card;