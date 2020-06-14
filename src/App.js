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
const [selectedCity, setSelectedCity] = useState();

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
