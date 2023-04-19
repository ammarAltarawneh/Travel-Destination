
import Home from "./components/home/Home";
import DataJason from "./data/data.json";


 function App(){
  return (
<>

<Home data={DataJason}/>

</>
  )
 }

 export default App;