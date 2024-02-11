import React from 'react';
import { Bar } from 'react-chartjs-2';

function CityChart({ cities }) {
  const cityData = {
    labels: cities.map((city) => city.name),
    datasets: [
      {
        label: 'City Info',
        data: cities.map((city) => city.population),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>City Chart</h2>
      <Bar data={cityData} />
    </div>
  );
}

export default CityChart;
