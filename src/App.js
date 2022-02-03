import './App.css';
import * as React from 'react';
import RestaurantItem from './RestaurantItem';
import Calendar from './Calendar'
import Header from './Header';
import ComboBox from './ComboBox'

function App() {
  const [optionName, setOptionName] = React.useState([]);

  const handleChange = (event) => {
      setOptionName(event.target.value);
  };

  return (
    <div className="App">
      <ComboBox optionName={optionName} handleChange={handleChange} />
      <Header />
      <Calendar />
      <RestaurantItem sortType={optionName} />
    </div>
  );
}

export default App;
