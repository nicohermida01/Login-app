import React from 'react';
import styled from 'styled-components';

import { BtnCircleLink, BtnCircle } from '../elements/ButtonsElements';
import SearchBox from './SearchBox';
import Images from '../commons/Images';

const Toolbar = () => {
    return (
        <ToolbarContainer>
            <BtnCircle>
                <FiltersIcon />
            </BtnCircle>

            <SearchBox />

            <BtnCircleLink to='/add-account'>
                <AddIcon />
            </BtnCircleLink>
        </ToolbarContainer>
    )
}

export default Toolbar;

const ToolbarContainer = styled.div`
    display: flex;
`;

const AddIcon = styled(Images.addAccount)`
    width: 18px;
`;

const FiltersIcon = styled(Images.filters)`
    width: 28px;
`;

