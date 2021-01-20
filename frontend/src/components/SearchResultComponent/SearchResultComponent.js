import React from 'react';
import './styles.css';

export default function Result({ city, onClick, notFound }) {
  const { city: name, dateTime, temp, humidity, wind_speedy } = city;

  const handleButtonClick = () => {
    const newCity = { city: name, temp, humidity, wind_speedy };
    onClick(newCity);
  }

  const resultDetails = (
    <div className="result-details">
      <ul>
        <li>Temperatura: <span className="font-bold">{temp}º</span></li>
        <li>Umidade: <span className="font-bold">{humidity}%</span></li>
        <li>Vento: <span className="font-bold">{wind_speedy}</span></li>
      </ul>
    </div>
  );

  return (
    <div className="result-container font-medium">
      <h2 className="text-title">{ name }</h2>
      
      <span className="text-subtitle">
        {dateTime}
      </span>
      
      {(name !== null && notFound === false) ? resultDetails
        : (name === null && notFound === true)
        ? ''
        : <p className="result-info">Se a cidade consultada for localizada, seus detalhes irão aparecer aqui!</p>
      }

      {notFound ? <p className="result-info">Cidade não encontrada!</p> : ''}

      {name
        ? <button type="submit" className="result-details-button-save" onClick={handleButtonClick}>Salvar</button>
        : ''
      }
      
    </div>
  )
}
