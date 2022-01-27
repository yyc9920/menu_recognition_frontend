import './App.css';
import * as React from 'react';
import RestaurantItem from './RestaurantItem';
import Calendar from './Calendar'

function App() {
  return (
    <div className="App">
      <Calendar />
      <RestaurantItem />
    </div>
  );
}

export default App;
