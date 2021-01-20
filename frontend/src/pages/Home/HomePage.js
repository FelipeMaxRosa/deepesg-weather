import Search from '../../components/SearchComponent/SearchComponent';
import Result from '../../components/SearchResultComponent/SearchResultComponent';
import Cities from '../../components/CitiesToCompareComponent/CitiesToCompareComponent';
import { useState } from 'react';
import helpers from '../../helpers/helpers';
import './styles.css';


function Home({cities, onClick, onDeleteClick}) {
  const allCities = [
    {
      city: "Sao Sebastiao, SP",
      city_name: "Sao Sebastiao",
      dateTime: "19/01/2021 22:18",
      humidity: 86,
      temp: 25,
      wind_speedy: "7 km/h"
    },
    {
      city: "Taubaté, SP",
      city_name: "Taubaté",
      dateTime: "19/01/2021 22:28",
      humidity: 78,
      temp: 24,
      wind_speedy: "2.06 km/h"
    },
    {
      city: "Ubatuba, SP",
      city_name: "Ubatuba",
      dateTime: "19/01/2021 22:42",
      humidity: 81,
      temp: 26,
      wind_speedy: "6 km/h"
    },
    {
      city: "Pindamonhangaba, SP",
      city_name: "Pindamonhangaba",
      dateTime: "19/01/2021 22:46",
      humidity: 78,
      temp: 24,
      wind_speedy: "2.06 km/h"
    }
  ];

  const initialCity = {
    temp: 25,
    city: "Cosmopolis, SP",
    humidity: 68,
    wind_speedy: "15 km/h",
    dateTime: helpers.getDateTimeNow(),
  };

  const initialEmptyCity = {
    temp: null,
    city: null,
    humidity: null,
    wind_speedy: null,
    dateTime: null,
  };

  const [selectedCity, setSelectedCity] = useState(initialEmptyCity);
  const [citiesFound, setCitiesFound] = useState(allCities);
  const [cityNotFound, setCityNotFound] = useState(false);

  const handleChangeSelectedCity = (newCity) => {
    setSelectedCity(newCity);

    if (newCity.city) {
      const newCitiesFound = [...citiesFound, newCity];
      setCitiesFound(newCitiesFound);
      setCityNotFound(false);
    } else {
      setCityNotFound(true);
    }
  }

  const handleButtonClick = (newCity) => {
    onClick(newCity);
  }
  
  return (
    <div id="search-city-container">
      <Search onClick={handleChangeSelectedCity} citiesFound={citiesFound}/>
      <Result city={selectedCity} notFound={cityNotFound} onClick={handleButtonClick}/>    
      <Cities cities={cities} onClick={onClick} onDeleteClick={onDeleteClick}/>
    </div>
  );
}

export default Home;