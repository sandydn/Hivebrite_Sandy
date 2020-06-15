import React from 'react';
import styled from 'styled-components';
import logo from '../assets/SearchIcon.svg';

const InputWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  line-height: 4.7rem;
  font-size: 1.3rem;
  background: none;
  padding: 5px 0px 0px 5px;
  border-style: none;
  outline: none;
  text-rendering: auto;
  caret-color: white;
  ::placeholder {
    color: white;
  },
  field__prefix_active {
    color: white;
    font-size: 1.3rem;
  } 
`;

const SearchBar = props => { 
  const {handleSearch} = props;
  return (
      <InputWrapper>
        <img src={logo} alt='search-icon'/>
        <Input type="text" placeholder='Enter a city name' onChange={handleSearch} />
      </InputWrapper>
  )
}

export default SearchBar;