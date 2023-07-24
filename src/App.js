
import './App.css';
import Header from './components/Header/Header';
import Home from "./Home/Home"
import Socialservices from "./Socialservices/Socialservices"
import Event from './Event/Event';
import Footer from './components/Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Structure from './Structure/Structure';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
     <Routes>
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/about' element={ <About></About>}></Route>
      <Route path='/Socialservices' element={ <Socialservices></Socialservices>}></Route>
      <Route path='/structure' element={<Structure></Structure>}></Route>
      <Route path='/event' element={ <Event></Event>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    
  );
}

export default App;






