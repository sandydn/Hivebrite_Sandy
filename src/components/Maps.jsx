import React from 'react';
import { Map, TileLayer,  Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const MapWrapper = styled(Map)`
  height: 630px;
  width: 80%;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.37);
`;

const Maps = props => {
const { zoom, data, selectedCity : {
  city, 
  latitude, 
  longitude, 
}} = props;
const selectedCityPosition = [latitude, longitude]

  return (
    <MapWrapper
      center={selectedCityPosition} 
      zoom={zoom} 
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
        <Marker position={selectedCityPosition}>
            <Popup>{city} </Popup>
        </Marker>
      {data.map(city => 
        <Marker key={city.rank} position={[city.latitude, city.longitude]}>
            <Popup>{city.city} </Popup>
        </Marker>
      )}
      
    </MapWrapper>
  )
}

export default Maps;