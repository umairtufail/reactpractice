import React from 'react';
import './App.css';
import Food from './food.js';

function App() {
  return (
    <div className="App">
      <Food dishName='chicken pizza'></Food>
      <hr></hr>
       <Food dishName='chicken pizza'></Food>
       <hr></hr>
        <Food dishName='chicken pizza'></Food>
      
    </div>
  );
}

export default App;
