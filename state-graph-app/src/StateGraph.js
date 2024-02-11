import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Tooltip from './Tooltip';
import CityChart from './CityChart';

function StateGraph() {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Sample data - replace this with your JSON response or database data
  const statesData = [
    { name: 'State1', temp: 30, population: 1000000, cities: [{ name: 'City1', population: 500000 }, /* ... */] },
    // Add data for other states
  ];

  const handleMouseOver = (state) => {
    setTooltipContent({
      name: state.name,
      temp: state.temp,
      population: state.population,
    });
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const chartData = {
    labels: statesData.map((state) => state.name),
    datasets: [
      {
        label: 'Temperature',
        data: statesData.map((state) => state.temp),
        backgroundColor: statesData.map((state) => {
          const normalizedTemp = (state.temp - 20) / 30; // Normalize temperature to 0-1 range
          const blueValue = Math.round(255 * (1 - normalizedTemp));
          const redValue = Math.round(255 * normalizedTemp);
          return `rgba(${redValue}, 0, ${blueValue}, 0.6)`;
        }),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          onClick: (_, activeElements) => {
            const index = activeElements[0]?.index;
            if (index !== undefined) {
              handleStateClick(statesData[index]);
            }
          },
          tooltips: {
            enabled: false,
            custom: (tooltipModel) => {
              if (tooltipModel.opacity > 0) {
                const tooltipData = statesData[tooltipModel.dataPoints[0].index];
                setTooltipContent({
                  name: tooltipData.name,
                  temp: tooltipData.temp,
                  population: tooltipData.population,
                });
              } else {
                setTooltipContent(null);
              }
            },
          },
        }}
      />
      {tooltipContent && <Tooltip content={tooltipContent} />}
      {selectedState && <CityChart cities={selectedState.cities} />}
    </div>
  );
}

export default StateGraph;
