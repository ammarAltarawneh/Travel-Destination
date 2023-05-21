

import Home from "./components/home/Home";
import TourDetails from './components/TourDetails/TourDetails';
import Navbar from '../src/components/Navbar/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'


const Data = require("./data/data.json")

 function App(){
  return (
<>

<Navbar/>
<div>
  

<Routes>
<Route path="/" element={<Home data={Data} />}></Route>
<Route path="/city/:id" element={<TourDetails data={Data} />}></Route>

</Routes>
</div>
</>
  )
 }

 export default App;