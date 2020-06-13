import React from 'react';
import styled from 'styled-components';
import Map from './components/Maps.jsx';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
`

const App = () => (
    <Wrapper>
      Hi !
       <Map />
    </Wrapper>
)

export default App;
