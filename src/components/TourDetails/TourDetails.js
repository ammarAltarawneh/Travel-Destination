import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Data = require("../../data/data.json")


function TourDetails(props) {

  const { id } = useParams();
  const [view, setView] = useState(false);

  return (
    <>
      {
        Data.map(element => {
          if(element.id == id){
            return(
              <div>
                <h2>{element.name}</h2>
                <img src={element.image} alt={element.name} />
                <p>{element.price}</p>
                <div>
                  {
                    view? <>
                    <p>{element.info}</p>
                    <button onClick={()=> setView(false)}> Show less</button>
                    </>
                    :
                    <>
                    <p>{(element.info).substring(0,200)}</p>
                    <button onClick={()=> setView(true)}> Show more</button>
                    </>
                  }
                </div>
              </div>
            )
          }
        })
      }
      
    </>
  )
}

export default TourDetails;