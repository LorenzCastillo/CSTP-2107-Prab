import "./HotelCard.css"

const HotelCard = ({ data }) => {
    return (
        <>
            <div className="card-container">
                <div className="card-header">
                    <img src={data.image} alt="" />
                </div>
                <div className="card-body">
                    {/* <img width="20px" src=""></img> */}
                    <span>Rating: {data.rating}</span>
                    <span>Likes: {data.like}</span>
                    <span>Location: {data.location}</span>

                    <p>Price: ${data.price}</p>
                </div>
            </div>
        </>
    );
}

export default HotelCard;