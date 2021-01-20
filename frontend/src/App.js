import React from "react";
// import Search from './components/SearchComponent/SearchComponent';
// import Header from './components/HeaderComponent/HeaderComponent';
// import Result from './components/SearchResultComponent/SearchResultComponent';
// import Cities from './components/CitiesToCompareComponent/CitiesToCompareComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import HomePage from './pages/Home/HomePage';
import ComparisonPage from './pages/Comparison/ComparisonPage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import helpers from './helpers/helpers';
import './App.css';


function App() {
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

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(initialCity);

  const handleChangeSelectedCity = (city) => {
    const newCity = { ...city, dateTime: helpers.getDateTimeNow() };
    setSelectedCity(newCity);
  }

  const handleButtonClick = (newCity) => {
    if (cities.length < 5) {
      const newCities = [...cities, newCity];
      setCities(newCities);

      setSelectedCity(initialEmptyCity);
    } else {
      alert('Limite máximo para consulta de 5 cidades!');
    }
  }

  const handleCityDelete = (index) => {
    const newCities = cities.filter((city, ind) => ind !== index);
    setCities(newCities);
    console.log("estou aqui");
  }

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Route path="/home" component={() => <HomePage cities={cities} onClick={handleButtonClick} onDeleteClick={handleCityDelete}/> } />
        <Route exact path="/comparison" component={() => <ComparisonPage cities={cities}/>} />
        <Redirect to="/home" />
      </BrowserRouter>
    </div>

    // <div className="container">
    //   <Header />

    //   <div id="search-city-container">
    //     <Search onClick={handleChangeSelectedCity} />
    //     <Result city={selectedCity} onClick={handleButtonClick}/>    
    //     <Cities cities={cities} />
    //   </div>
    // </div>
  );
}

export default App;
