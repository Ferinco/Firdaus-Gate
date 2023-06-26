import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Admission from "./Components/Admission";
import Offer from "./Components/Offer";
import './style.css'

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Gallery/>
      <Services/>
      <Admission/>
      <Offer/>
    </div>
  );
}

export default App;
