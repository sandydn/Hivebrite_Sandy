import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  border: 1px solid black;
  width: 30%;
height: 850px;
overflow-y: scroll;
overflow-x: hidden;
`

const ListItem = props => {
    const {cities} = props
   
    return (
        <ListWrapper >
            <h1>{cities.map(city => <h1>{city.city}</h1>)}</h1>
        </ListWrapper>
    );
}

export default List;
