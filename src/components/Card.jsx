import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.button`
    border: 1px solid black;
    width: 90%;
    height: 120px;
    margin: 6px 0px 0px 22px;
    text-align: center;
    background-color: antiquewhite;
`

const Card = props => {
    const {cityData: { city, state, rank }, handleClick} = props
    return (
        <CardStyle onClick={() => handleClick(rank)}>
            <h1>{city}</h1>
            <h3>{state}</h3>
        </CardStyle>
    );
}

export default Card;