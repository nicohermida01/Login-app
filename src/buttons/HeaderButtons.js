import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../commons/Colors';
import Images from '../commons/Images';
import { useAppContext } from '../context/AppContext';

export const ProfileButton = () => {
    return(
        <NavBtn to='/user-profile'>
            Hello Username!
            <ProfileIcon />
        </NavBtn>
    )
}

export const LogoutButton = () => {
    const { actions: { handleUserConected } } = useAppContext();

    return(
        <NavBtn to='/sign-in' onClick={() => handleUserConected()}>
            Sign Out
            <LogoutIcon />
        </NavBtn>
    )
}

export const SignInButton = () => {
    return(
        <NavBtn to='/sign-in'>
            Sign In
            <SignInIcon />
        </NavBtn>
    )
}

export const SignUpButton = () => {
    return(
        <NavBtn to='/sign-up'>
            Sign Up
            <SignUpIcon />
        </NavBtn>
    )
}

const NavBtn = styled(Link)`
    width: 100%;
    height: 100%;
    transition: .3s ease all;
    color: ${Colors.BASEBLUE1};
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover {
        background: ${Colors.BASEBLUE4};
    }

    & svg {
        width: 20px;
        fill: ${Colors.BASEBLUE1};
        margin-left: 10px;
    }
`;

const ProfileIcon = styled(Images.userProfile)``;
const LogoutIcon = styled(Images.logout)``;
const SignInIcon = styled(Images.signIn)``;
const SignUpIcon = styled(Images.signUp)``;