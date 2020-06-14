import React from 'react';
import { Map, TileLayer,  Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const MapWrapper = styled(Map)`
  height: 845px;
  width: 60%;
  margin: 0 auto;
`;


const Maps = props => {
const { selectedCity } = props;
const cityObject = selectedCity[0]
const {
  city, 
  growth_from_2000_to_2013, 
  latitude, 
  longitude, 
  population, 
  state
} = cityObject
const position = [latitude, longitude]

  return (
    <MapWrapper
      center={position} 
      zoom={11} 
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>🌃 {city} <br /> 👥 {population}  <br /> </Popup>
      </Marker>
    </MapWrapper>
  )
}

export default Maps;