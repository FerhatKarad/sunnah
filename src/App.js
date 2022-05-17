import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Kalender from './components/pages/Kalender/Kalender';
import Projekte from './components/pages/Projekte/Projekte';
import Footer from './components/pages/Footer/Footer';
import Sunnah from './components/pages/Sunnah/Sunnah';


function App() {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/kalender' element={<Kalender />} />
        <Route path='/projekte' element={<Projekte />} />
        <Route path='/sunnahs' element={<Sunnah />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
