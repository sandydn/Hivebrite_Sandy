import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import data from './assets/cities.json';
import List from './components/List.jsx';
import logo from './assets/population.png';
import Map from './components/Maps.jsx';
import SearchBar from './components/SearchBar.jsx';

const MainWrapper = styled.div`
    height: 95vh;
    width: 100%;
    background-color: #FAFAFA;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
`; 

const NavBar = styled.div`
  height: 84px;
  display: flex;
  background-color: #8baee6;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 150px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.6rem;
`;

const Logo = styled.img`
  width: 90px;
  height: 50px;
  margin: 0px 0px 13px 5px;
`;

const Content = styled.div`
  margin: 40px 20px;
  display: flex;
  justify-content: space-around;
`;

const SubText = styled.p`
  font-size: .5rem;
  display: flex;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
`;

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

  const [counter, setCounter] = useState(3);
  const [displayCities, setDisplayCities] = useState(data);
  const [isSearching, setIsSearching] = useState(false);
  const [zoom, setZoom] = useState(4); 

  useEffect(() => {
    !isSearching && setDisplayCities(data.filter(city => city.rank <= counter))
  }, [counter, isSearching]);

  const handleMore = () => {
    setCounter(counter + 10);
  };

  const handleSearch = e => {
    setDisplayCities(data.filter(city => city.city.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1))
    e.target.value.length > 0 ? setIsSearching(true) : setIsSearching(false); 
  };

  const handleSelectCity = (id) => {
    const selected = data.filter(city => city.rank === id)
    setSelectedCity(selected[0]);
    setZoom(11);
  };

  return (
    <div>
      <MainWrapper>
        <NavBar>
          <SearchBar handleSearch={handleSearch}/>
          <TitleWrapper>
            <Title>American Population Growth</Title>
            <Logo src={logo} alt="Population Growth Clipart@pngkey.com"/>
          </TitleWrapper>
        </NavBar>
        <Content>
          <List cities={displayCities} selectedCity={selectedCity} handleClick={handleSelectCity} handleMore={handleMore}/>
          <Map selectedCity={selectedCity} data={displayCities} zoom={zoom}/>
        </Content>
      </MainWrapper>
       <SubText>&copy; create with &#10084; by Sandy</SubText>
    </div>
  );
};

export default App;
