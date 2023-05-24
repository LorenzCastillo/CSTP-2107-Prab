// Local Imports
import './App.css'
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import HotelInfo from './components/HotelInfo/HotelInfo';
import data from "./constant.json";

// 3rd Party Imports
import { useState } from 'react';

function App() {
  
  const [ hotelData, setHotelData ] = useState(data);

  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <HotelInfo data={hotelData} />
      </div>
    </>
  )
}

export default App;