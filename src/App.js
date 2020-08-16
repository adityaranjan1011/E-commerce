import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

// import { Canvas } from 'react-canvas-js';


// const particleOptions = {
//   "maxParticles": 100,
//   "colors": [
//     '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
//   '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
//   '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
//   '#FF5722'
//   ],
//   "shapes": [
//     "circle",
//     "square",
//     "diamond"
//   ],
//   "size": 8,
//   "minSpeed": 1.05,
//   "maxSpeed": 1.5,
//   "alpha": 0.7,
//   // "backgroundColor": "lightcoral"
// };


function App() {

  return (
    <div className="App">
      <Home/>         
    </div>
  );
}

export default App;
