import React, {useState} from 'react';
import styled from 'styled-components';
import Map from './components/Maps.jsx';
import List from './components/List.jsx';
import data from './cities.json';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1300px;
  display: flex;
`

const App = () => {
const [selectedCity, setSelectedCity] = useState([{
  city: "New York",
  growth_from_2000_to_2013: "4.8%",
  latitude: 40.7127837,
  longitude: -74.0059413,
  population: "8405837",
  rank: "1",
  state: "New York",
}]);

const handleSelectCity = (id) => {
  const selected = data.filter(city => city.rank === id)
  setSelectedCity(selected)
}

  return (
    <Wrapper>
      <List cities={data} handleClick={handleSelectCity}/>
      <Map selectedCity={selectedCity}/>
    </Wrapper>
  )
}

export default App;
