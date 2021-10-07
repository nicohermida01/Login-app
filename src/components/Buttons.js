import React from 'react';
import styled from 'styled-components';

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
    width: ${props => props.card ? '28px' : '40px'};
    height: ${props => props.card ? '28px' : '40px'};
    border-radius: 50%;
    background: ${Colors.BASEBLUE3};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: .3s ease all;

    & > svg {
        fill: ${Colors.BASEBLUE1};
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

const FiltersIcon = styled(Images.filters)`
    width: 28px;
`;
const AddIcon = styled(Images.addAccount)`
    width: 18px;
`;
const DeleteIcon = styled(Images.deleteAccount)`
    width: 14px;
`;
const EditIcon = styled(Images.editAccount)`
    width: 14px;
`;