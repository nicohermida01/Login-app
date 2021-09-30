import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import Images from '../commons/Images';

const Header = () => {
    return (
        <Conteiner>
                <img src={Images.logoApp} alt="" />
                <Title>LogIn App</Title>
        </Conteiner>
    )
}

export default Header;

const Conteiner = styled.div`
    width: 100%;
    height: 40px;
    max-height: 40px;
    background: ${Colors.BASEBLUE3};
    display: flex;
    justify-content: center;
    padding: 5px 0;
`;

const Title = styled.h1`
    margin-left: 10px;
    font-size: 24px;
    color: ${Colors.BASEDARK};
`;
