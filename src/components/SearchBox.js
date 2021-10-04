import React from 'react';
import styled from 'styled-components';

import Images from '../commons/Images';
import Colors from '../commons/Colors';

const SearchBox = () => {
    return (
        <SearchBoxContainer>
            <SearchInput 
                type='text'
                placeholder='Search by platform...'
            />
            <SearchIcon />
        </SearchBoxContainer>
    )
}

export default SearchBox;

const SearchBoxContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    width: 400px;
    height: 40px;
    background: ${Colors.BASEBLUE3};
    border-radius: 100px;
    outline:none;
    border: none;
    margin: 0 30px;
    text-align: center;
    color: ${Colors.BASEBLUE1};
    font-size: 20px;
    font-family: Sansation, sans-serif;

    &::placeholder {
        color: ${Colors.BASEBLUE1};
    }
`;

const SearchIcon = styled(Images.search)`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 11px;
    right: 45px;
    cursor: pointer;
`;
