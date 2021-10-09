import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../commons/Colors';
import Images from '../commons/Images';
import { useAppContext } from '../context/AppContext';

const Header = () => {
    const {
        data: { userConnected },
        actions: { handleUserConected }
    } = useAppContext();

    return (
        <HeaderContainer>
            <HeaderMain>
                <AppLogo>
                    <Logo src={Images.logoApp} alt="logo app"/>
                    <Title>Login App</Title>
                </AppLogo>

                {
                    userConnected ?
                        <Navbar small>
                            <NavBtn to='/user-profile'>
                                Hello Username!
                                <ProfileIcon />
                            </NavBtn>

                            <NavBtn to='/sign-in' onClick={() => handleUserConected()}>
                                Sign Out
                                <LogoutIcon />
                            </NavBtn>
                        </Navbar>

                    :

                        <Navbar>
                            <NavBtn to='/sign-in'>
                                Sign In
                                <SignInIcon />
                            </NavBtn>

                            <NavBtn to='/sign-up'>
                                Sign Up
                                <SignUpIcon />
                            </NavBtn>
                        </Navbar>
                }
            </HeaderMain>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
    height: 50px;
    width: 100%;
    background: ${Colors.BASEBLUE3};
`;

const HeaderMain = styled.div`
    width: 100%;
    height: 100%;
    max-width: var(--app-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
`;

const AppLogo = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 24px;
    cursor: text;
`;

const Title = styled.h1`
    color: ${Colors.BASEBLUE1};
    margin-left: 10px;
    line-height: 50px;
    font-size: 18px;
`;

const Navbar = styled.nav`
    width: ${props => props.small ? '400px' : '350px'};
    height: 50px;
    display: flex;
    transition: .5s ease all;

    & > * {
        flex: 1;
    }
`;

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

