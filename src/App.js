import React from 'react';
import styled from 'styled-components';
import Map from './components/Maps.jsx';
import List from './components/ListItem.jsx';
import data from './cities.json';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1300px;
  display: flex;
`

function App() {
  return (
    <Wrapper>
      Hi !
      <List cities={data} />
      <Map />
    </Wrapper>
  )
}

export default App;
