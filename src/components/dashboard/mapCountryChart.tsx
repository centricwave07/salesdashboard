import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import countryData from "@/data/feature.json"

const MapCountryChart = () => {
  return (
    <div className='h-full map-path'>
      <ComposableMap>
        <Geographies geography={countryData} >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapCountryChart; 
