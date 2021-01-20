import React from 'react';
import './styles.css';
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import { Link } from 'react-router-dom';


export default function Cities({ cities, onDeleteClick }) {
  const trCities = cities.map((city, index) => {
    return (
      <tr key={index}>
        <td>{city.city}</td>
        <td>
          <ButtonDelete id={index} onClick={onDeleteClick}/>
        </td>
      </tr>
    )
  });

  return (
    <div className="cities-to-compare-container">
      <h2>Cidades Selecionadas</h2>
      
      <table className="table-cities-to-compare">
        <tbody>
          {trCities}
        </tbody>
      </table>
      
      {cities.length > 0
        ? <Link className="button-compare" to="/comparison">Comparar</Link>
        : ''
      }
      
      {/* <button type="submit" className="button-compare">
      </button> */}
    </div>
  )
}
