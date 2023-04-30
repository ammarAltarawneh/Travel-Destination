import { Link } from 'react-router-dom';


function Tour(props) {    
  return (
    <>
  <h2>{props.name}</h2>
  <img src={props.image} alt={props.name} />
    
    </>
  )
}

export default Tour;