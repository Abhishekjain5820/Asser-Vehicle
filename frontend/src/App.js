import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './main/component/Navbar';
import Topbar from './main/component/Topbar';
import Footer from './main/component/Footer';
import Preloader from './main/component/Preloader';
import Scrolltotop from './main/component/Scrolltotop';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        {/* Website Routes */}
        <Route path='/' element={ <div style={{height:'200vh',paddingTop:'150px'}}> Hello </div> } />

        {/* self drive */}
        <Route path='/Self-drive' element={<div>Hello</div>}>
          <Route path='car' element={<div>Car</div>} />
        </Route>

        {/* Taxi */}
        <Route path='/Taxi' element={<div>Hello</div>} />

        {/* Main Admin */}
        <Route path='/Admin' element={<div>Hello</div>} />
      </Routes>

      <Preloader/>
      <Scrolltotop/>

      <Footer />
    </div>
  );
}

export default App;
