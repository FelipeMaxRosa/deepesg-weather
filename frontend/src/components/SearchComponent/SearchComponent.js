import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import weatherService from "../../services/weatherService";

function Search({ onClick, citiesFound }) {
  const [textInputSearch, setTextInputSearch] = useState("");

  const emptyCity = {
    temp: null,
    city: null,
    humidity: null,
    wind_speedy: null,
    dateTime: null,
  };

  const handleInputChange = (e) => {
    setTextInputSearch(e.target.value);
  }
  
  const handleButtonClick = async () => {
    const cityFounded = citiesFound.filter((city) => city.city_name === textInputSearch);
    if (cityFounded.length > 0) {
      onClick(cityFounded[0]);
    } else {
      try {
        const res = await weatherService.get(textInputSearch);        
        onClick(res.data);
      } catch (error) {
        onClick(emptyCity);
        console.log({ error: error.message });
      }
    }
  }

  return (
    <div className="search-city-input-contaner">
      <input className="search-city-input" value={textInputSearch}
        type="text" placeholder="city name" onChange={handleInputChange} />
      
      <button className="search-city-input-button" onClick={handleButtonClick}>
        <FiSearch />
      </button>
    </div>
  )
}

export default Search;
