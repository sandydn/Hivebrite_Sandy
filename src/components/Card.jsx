import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    width: 215px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 25px 45px 0px 3px;
    background: ${props => props.isSelected ? '#d2ebfa' : '#ebf1f5'};
    border: ${props => props.isSelected && '.5px solid #8baee6'};
    box-shadow: 2px 9px 20px rgba(0,0,0,0.1);
    cursor: pointer;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CityName = styled.h2`
    margin: 5px 0px;
    font-size: 1.4em;
    width: 130px;
`;

const CityState = styled.h3`
    margin: 0px;
    text-transform: uppercase;
    font-size: .8em;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const NumberItem = styled.h3`
    font-family: 'Advent Pro', sans-serif;
    font-size: 1em;
`;

const Card = props => {
    const {cityData: { 
        city, 
        state, 
        rank, 
        growth_from_2000_to_2013, 
        population 
    }, selectedCity, handleClick} = props;
     const isSelected = selectedCity.rank === rank ? true : false;

    return (
        <CardStyle onClick={() => handleClick(rank)} isSelected={isSelected}>
            <Column>
                <CityName>{city}</CityName>
                <CityState>{state}</CityState>
            </Column>
            <Column>
                <Item>
                    <Icon src="https://img.icons8.com/fluent/25/000000/conference-call.png"/>
                    <NumberItem>{population}</NumberItem>
                </Item>
                <Item>
                <Icon src={growth_from_2000_to_2013.includes('-') ? "https://img.icons8.com/fluent/35/000000/down.png" : "https://img.icons8.com/fluent/35/000000/up.png"}/>
                    <NumberItem>{growth_from_2000_to_2013}</NumberItem>
                </Item>
            </Column>
        </CardStyle>
    );
};

export default Card;