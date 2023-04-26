import {Link} from "react-router-dom";//


function Header(){
    return (
  <>


  <nav>
    <Link to="/">Home</Link>
  </nav>



  <h1 style={{color:'red'}} className={"Heading"}>Travel Destination</h1>
  </>
    )
   }
  
   export default Header;