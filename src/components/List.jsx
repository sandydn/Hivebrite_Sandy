import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.div`
    border: 1px solid black;
    width: 30%;
    height: 850px;
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
