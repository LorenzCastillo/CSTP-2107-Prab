/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// Local Imports
import "./HotelInfo.css"
import HotelCard from "../HotelCard/HotelCard";

const HotelInfo = ({ data }) => {
    return (
        <>
            <div className="hotel-card-container">
                {
                    data.map((hotelData) => {
                        return <HotelCard data={hotelData}/>
                    })
                }
            </div>
        </>
    );
}

export default HotelInfo;