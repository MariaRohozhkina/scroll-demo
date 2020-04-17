import React from 'react';
import logo from './logo.svg';
import car from './car.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='car'>
        <img src={car} height='70' id='car'/>
      </div>
      <div className='car-road'></div>
    </div>
  );
}

export default App;
