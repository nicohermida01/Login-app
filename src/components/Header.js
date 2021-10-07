import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import Images from '../commons/Images';
import { useAppContext } from '../context/AppContext';

const Header = () => {
    const { data: { userConnected } } = useAppContext();

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
                            <NavItem>
                                <NavLink href="#">Hello Username!</NavLink>
                                <ProfileIcon />
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Sign Out</NavLink>
                                <LogoutIcon />
                            </NavItem>
                        </Navbar>

                    :

                        <Navbar>
                            <NavItem>
                                <NavLink href="#">Sign In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Sign Up</NavLink>
                            </NavItem>
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
    width: ${props => props.small ? '400px' : '200px'};
    height: 50px;
    display: flex;

    & > * {
        flex: 1;
    }
`;

const NavItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease all;
    cursor: pointer;

    &:hover {
        background: ${Colors.BASEBLUE4};
    }

    & > svg {
        width: 20px;
        fill: ${Colors.BASEBLUE1};
        margin-left: 10px;
    }
`;

const NavLink = styled.a`
    color: ${Colors.BASEBLUE1};
`;

const ProfileIcon = styled(Images.userProfile)``;
const LogoutIcon = styled(Images.logout)``;


