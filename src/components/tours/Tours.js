
import Tour from "./toor/Toor";
import { Link } from "react-router-dom";

function Tours(props) {


    return (
        <div className='PlaceContainer'>
            {
                props.data.map(tour => {
                    return (
                        <div Key={tour.id}>
                            <Link to={`/city/${tour.id}`}>
                                <Tour name={tour.name} image={tour.image} />
                            </Link>
                            <br></br>
                            <br></br>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Tours;