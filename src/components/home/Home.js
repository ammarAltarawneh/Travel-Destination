import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';



 function Home(props){
  
  return (
<>

<Header />

<Tours dataSent={props}/>

<Footer />

</>
  )
 }

 export default Home;