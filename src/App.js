
import Home from "./components/home/Home";
import DataJason from "./data/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';

 function App(){
  return (
<>

<Home data={DataJason}/>

</>
  )
 }

 export default App;