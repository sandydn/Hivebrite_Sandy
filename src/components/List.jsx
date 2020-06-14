import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.div`
    height: 850px;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
`

const List = props => {
    const {cities, handleClick} = props
    return (
        <ListWrapper >
           {cities.map(city => <Card key={city.rank} cityData={city} handleClick={handleClick}/>)}
        </ListWrapper>
    );
}

export default List;
