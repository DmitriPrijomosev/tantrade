import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './Pages/Avaleht';
import Naturavita from './Pages/Naturavita';

function App() {

  const [keel, muudaKeel] = useState('EE');

  return (
    <div className="App">
      <div className='menu'>
        
        <div className='links'>
          

        </div>
        
        <div className='languages'>
          <button className='languages-button'>ET</button>
          <button className='languages-button'>RU</button>

        </div>
      </div>
      <Routes>
        <Route path='' element={<Avaleht />} />
        <Route path='naturavita' element={ <Naturavita />} />
      </Routes>
    </div>
  );
}

export default App;
