import React, { useState } from 'react';
import styled from 'styled-components';

import { BtnAdd, BtnFilters } from '../elements/Buttons';
import Colors from '../commons/Colors';

const ToolBar = () => {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <ToolbarContainer>
            <BtnFilters />
            <SearchBox 
                type='text' 
                placeholder='Search by platform...' 
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <BtnAdd />
        </ToolbarContainer>
    )
}

export default ToolBar;

const ToolbarContainer = styled.div`
    display: flex;
`;

const SearchBox = styled.input`
    background: ${Colors.BASEBLUE3};
    height: 20px;
    width: 200px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 20px;
    color: ${Colors.BASEDARK2};
    font-weight: bold;
    font-size: 14px;
    text-align: center;

    &::placeholder {
        color: ${Colors.BASEDARK2};
    }
`;
