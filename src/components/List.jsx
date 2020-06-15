import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.div`
    height: 630px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const ButtonMore = styled.button`
    position: absolute;
    bottom: 10px;
    font-size: 1em;
    margin: 0em 2.95em;
    padding: 0.15em 1em;
    border: 2px solid #8baee6;
    border-radius: 3px;
    color: #84a3d6;
`;

const List = props => {
    const {cities, handleClick, handleMore} = props;

    return (
        <ListWrapper >
                {cities.map(city => <Card key={city.rank} cityData={city} handleClick={handleClick}/>)}
           <ButtonMore onClick={handleMore}>Shom Me More</ButtonMore>
        </ListWrapper>
    );
};

export default List;
