import React from 'react';

function Tooltip({ content }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
      <p>{`Name: ${content.name}`}</p>
      <p>{`Temperature: ${content.temp}°C`}</p>
      <p>{`Population: ${content.population}`}</p>
    </div>
  );
}

export default Tooltip;
