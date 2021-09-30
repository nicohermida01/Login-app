import styled from "styled-components";
import React from 'react';
import { Link } from 'react-router-dom';

import Colors from "../commons/Colors";
import Images from "../commons/Images";

export const BtnAdd = () => {
    return(
        <Button to='/add'>
            <AddIcon />
        </Button>
    ); 
}

export const BtnFilters = () => {
    return(
        <Button to=''>
            <FiltersIcon />
        </Button>
    );
}

const Button = styled(Link)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${Colors.BASEBLUE3};
    outline: none;
    border: none;
    color: ${Colors.BASEDARK2};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        box-shadow: 0 0 10px 2px rgba(169, 206, 255, .5);
    }
`;

const AddIcon = styled(Images.addAccount)``; 
const FiltersIcon = styled(Images.filters)``;
