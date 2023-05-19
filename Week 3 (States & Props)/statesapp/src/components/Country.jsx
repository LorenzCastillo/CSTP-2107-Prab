/* eslint-disable react/prop-types */
import City from "./City";

const Country = (props) => {
    return (
        <>
            <div>
                <img width="200" src={props.image}></img>
                <p>{props.title}</p>

                <City {...props}/>
            </div>
        </>
    );
}

export default Country;