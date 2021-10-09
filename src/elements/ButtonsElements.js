import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../commons/Colors';

export const Button = styled.button`
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

export const LinkButton = styled(Link)`
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

export const BtnCircleLink = styled(Link)`
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

export const BtnCircle = styled.button`
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