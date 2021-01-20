import React from 'react';
import './styles.css';

export default function ComparisonPage({cities}) {
  const renderCitiesToComparison = () => {
    const trsTable = cities.map((city, index) => {
      const { city: name, temp, humidity, wind_speedy } = city;
      return (
        <tr key={index} className="cities-comparison-row">
          <td>{name}</td>
          <td className="text-center">{temp}º</td>
          <td className="text-center">{humidity}%</td>
          <td className="text-center">{wind_speedy}</td>
        </tr>
      )
    });

    return trsTable;
  }

  return (
    <div>
      <h2 className="cities-comparison-title">Tabela de Comparação</h2>
      <table className="cities-comparison-table">
        <thead>
          <tr className="cities-comparison-head-row">
            <th>Cidade</th>
            <th className="text-center">Temp.</th>
            <th className="text-center">Umidade</th>
            <th className="text-center">Vento</th>
          </tr>
        </thead>

        <tbody>
          {renderCitiesToComparison()}
        </tbody>
      </table>
    </div>
  )
}
