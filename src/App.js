import './App.css';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import {Routes,Route} from "react-router-dom"; 
import Home from './components/Home/home';
import Personajes from './components/Personajes/personajes';
import Episodios from './components/Episodios/episodios';
import Mundos from './components/Mundos/mundos';

function App() {
  return (
    <div className="App">
      <Menu/>
        <main className='text-bg-dark p-3'>
          <Routes>
            <Route path="/primera-app-bootstrap" element = {<Home/>} />
            <Route path="/personajes" element = {<Personajes/>} />
            <Route path="/episodios" element = {<Episodios/>} />
            <Route path="/mundos" element = {<Mundos/>} />
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
