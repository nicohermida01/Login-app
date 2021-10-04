import React from 'react';
import styled, { css } from 'styled-components';

import Colors from '../commons/Colors';
import Images from '../commons/Images';

export const ButtonFilters = () => {
    return(
        <BtnCircle>
            <FiltersIcon />
        </BtnCircle>
    )
}

export const ButtonAddAccount = () => {
    return(
        <BtnCircle>
            <AddIcon />
        </BtnCircle>
    )
}

export const ButtonDeleteAccount = () => {
    return(
        <BtnCircle card>
            <DeleteIcon />
        </BtnCircle>
    )
}

export const ButtonEditAccount = () => {
    return(
        <BtnCircle card>
            <EditIcon />
        </BtnCircle>
    )
}

const BtnCircle = styled.button`
    width: ${props => props.card ? '30px' : '40px'};
    height: ${props => props.card ? '30px' : '40px'};
    border-radius: 50%;
    background: ${Colors.BASEBLUE3};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: .3s ease all;

    & > svg {
        width: ${props => props.card ? '16px' : '20px'};
    }
    
    &:hover {
        box-shadow: 0 0 10px 1px rgba(242,242,242,.75);
        box-shadow: ${props => props.card ?
            '0 0 10px 0 rgba(242,242,242,.75)'
        :
            '0 0 10px 1px rgba(242,242,242,.75)'
        };
    }
`;

const FiltersIcon = styled(Images.filters)``;
const AddIcon = styled(Images.addAccount)``;
const DeleteIcon = styled(Images.deleteAccount)``;
const EditIcon = styled(Images.editAccount)``;