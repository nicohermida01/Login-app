import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import Images from '../commons/Images';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderMain>
                <AppLogo>
                    <Logo src={Images.logoApp} alt="logo app"/>
                    <Title>Login App</Title>
                </AppLogo>
                <Navbar>
                    <NavLink href="#">Sign In</NavLink>
                    <NavLink href="#">Sign Up</NavLink>
                </Navbar>
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
    height: 24px;
`;

const Title = styled.h1`
    color: ${Colors.BASEBLUE1};
    margin-left: 10px;
    line-height: 50px;
    font-size: 18px;
`;

const Navbar = styled.nav`
    width: 200px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    & > * {
        flex: 1;
    }

`;

const NavLink = styled.a`
    color: ${Colors.BASEBLUE1};
    line-height: 50px;
    transition: .3s ease all;

    &:hover {
        background: ${Colors.BASEBLUE4};
    }
`;


