import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css'

const MapWrapper = styled(Map)`
  height: 700px;
  width: 60%;
  margin: 0 auto;
`;

function Maps() {
  return (
    <MapWrapper
      center={[49.8419, 24.0315]} 
      zoom={12} 
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapWrapper>
  )
}

export default Maps;