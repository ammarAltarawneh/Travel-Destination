import { Link } from 'react-router-dom';


function Tour(props) {    
  return (
    <div className='PlaceDiv'>
  <h2 className='PlaceName'>{props.name}</h2>
  <img src={props.image} alt={props.name} className='PlaceImg'/>
    
    </div>
  )
}

export default Tour;