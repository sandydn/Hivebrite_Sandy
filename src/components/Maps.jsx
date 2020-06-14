import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css'

const MapWrapper = styled(Map)`
  height: 845px;
  width: 60%;
  margin: 0 auto;
`;

const Maps = props => {
  console.log('Ville reçu par map =>', props.selectedCity)
  return (
    <MapWrapper
      center={[40.7127837, -74.0059413]} 
      zoom={11} 
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapWrapper>
  )
}

export default Maps;