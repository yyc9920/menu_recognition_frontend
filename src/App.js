import './App.css';
import * as React from 'react';
import RestaurantItem from './RestaurantItem';
import Calendar from './Calendar'
import Header from './Header';
import ComboBox from './ComboBox'

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <ComboBox />
      <RestaurantItem />
    </div>
  );
}

export default App;
