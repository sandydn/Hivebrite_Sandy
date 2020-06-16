import React from 'react';
import styled from 'styled-components';
import { Icon } from "leaflet";
import { Map, TileLayer,  Marker, Popup } from 'react-leaflet';

const MapWrapper = styled(Map)`
  height: 510px;
  width: 80%;
  margin: 0px 15px;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.37);
`;

const customMarker = new Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/68px-Google_Maps_pin.svg.png",
  iconSize: [38, 60],
  iconAnchor: [20, 50],
  popupAnchor: [0, -47],
});

const Maps = props => {
  const { zoom, data, selectedCity : {
    city, 
    latitude, 
    longitude, 
    growth_from_2000_to_2013
  }} = props;

  const selectedCityPosition = [latitude, longitude];

  return (
    <MapWrapper
      center={selectedCityPosition} 
      zoom={zoom} 
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={selectedCityPosition} zIndexOffset={1} icon={customMarker}>
          <Popup>{city} <br /> {growth_from_2000_to_2013} </Popup>
      </Marker>
      {data.map(city => 
        <Marker key={city.rank} position={[city.latitude, city.longitude]}>
            <Popup>{city.city} </Popup>
        </Marker>
      )}
    </MapWrapper>
  );
};

export default Maps;