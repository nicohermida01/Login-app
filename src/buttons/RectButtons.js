import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../commons/Colors';

export const CreateAccountButton = () => {
    return(
        <Button type='submit'>
            Create Account
        </Button>
    )
}

export const CancelButton = () => {
    return(
        <LinkButton to='/home'>
            Cancel
        </LinkButton>
    )
}

export const ConfirmButton = () => {
    return(
        <Button type='submit'>
            Confirm
        </Button>
    )
}

const LinkButton = styled(Link)`
    width: 200px;
    height: 60px;
    background: ${Colors.BASEBLUE3};
    outline: none;
    border: none;
    color: ${Colors.BASEBLUE1};
    border-radius: 10px;
    font-size: 18px;
    font-family: Sansation, sans-serif;
    box-shadow: 0 4px 4px 0 rgba(0,0,0, .5);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: .3s ease all;

    &:hover {
        background: ${Colors.BASEBLUE4};
    }
`;

const Button = styled.button`
    width: 200px;
    height: 60px;
    background: ${Colors.SUCCES};
    outline: none;
    border: none;
    font-family: Sansation, sans-serif;
    border-radius: 10px;
    color: ${Colors.BASEBLUE1};
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 4px 0 rgba(0,0,0, .5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: .3s ease all;

    &:hover {
        background: ${Colors.SUCCESHOVER};
    }
`;