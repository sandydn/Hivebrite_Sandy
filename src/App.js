import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from './components/Maps.jsx';
import List from './components/List.jsx';
import data from './cities.json';

const MainWrapper = styled.div`
    height: 95vh;
    width: 100%;
    background-color: #FAFAFA;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
`; 

const NavBar = styled.div`
  height: 84px;
  background-color: #8baee6;
`

const Content = styled.div`
  margin: 40px 20px;
  display: flex;
  justify-content: space-around;
`

const App = () => {
const [selectedCity, setSelectedCity] = useState({
  city: "New York",
  growth_from_2000_to_2013: "4.8%",
  latitude: 40.7127837,
  longitude: -74.0059413,
  population: "8405837",
  rank: "1",
  state: "New York",
});

const [zoom, setZoom] = useState(4) 

const handleSelectCity = (id) => {
  const selected = data.filter(city => city.rank === id)
  setSelectedCity(selected[0])
  setZoom(11)
}

const [displayCities, setDisplayCities] = useState(data)
const [counter, setCounter] = useState(3)

useEffect(() => {
  setDisplayCities(data.filter(city => city.rank <= counter))
}, [counter]);

const handleMore = () => {
  setCounter(counter + 10)
}

  return (
    <MainWrapper>
      <NavBar />
      <Content>
        <List cities={displayCities} handleClick={handleSelectCity} handleMore={handleMore}/>
        <Map selectedCity={selectedCity} data={displayCities} zoom={zoom}/>
      </Content>
    </MainWrapper>
  )
}

export default App;
