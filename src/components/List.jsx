import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.div`
    height: 510px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const ButtonMore = styled.button`
    position: absolute;
    bottom: 20px;
    font-size: 1em;
    margin: 0em 2.95em;
    padding: 0.15em 1em;
    border: 2px solid #8baee6;
    border-radius: 3px;
    color: #84a3d6;
`;

const CardNotFound = styled.div`
    width: 215px;
    padding: 20px;
    margin: 25px 45px 0px 3px;
`;

const TextNotFound = styled.h2`
    margin: 10px 25px;
    font-size: 1.1rem;
    width: 140px;
`;

const List = props => {
    const {cities, selectedCity, handleClick, handleMore} = props;

    return (
        <ListWrapper >
                {cities.length > 0 ? 
                    cities.map(city => <Card key={city.rank} cityData={city} selectedCity={selectedCity} handleClick={handleClick}/>)
                    :
                    <CardNotFound>
                        <TextNotFound>Oops not found ...</TextNotFound>
                    </CardNotFound>
                }
           <ButtonMore data-jest='button-more' onClick={handleMore}>Shom Me More</ButtonMore>
        </ListWrapper>
    );
};

export default List;
