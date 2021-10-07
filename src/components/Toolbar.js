import React from 'react';
import styled from 'styled-components';

import { ButtonFilters, ButtonAddAccount } from '../buttons/CircleButtons';
import SearchBox from './SearchBox';

const Toolbar = () => {
    return (
        <ToolbarContainer>
            <ButtonFilters />
            <SearchBox />
            <ButtonAddAccount />
        </ToolbarContainer>
    )
}

export default Toolbar;

const ToolbarContainer = styled.div`
    display: flex;
`;

