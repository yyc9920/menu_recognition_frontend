import './App.css';
import * as React from 'react';
import RestaurantItem from './RestaurantItem';
import Calendar from './Calendar'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <RestaurantItem />
    </div>
  );
}

export default App;
