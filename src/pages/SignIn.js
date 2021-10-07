import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';

const SignIn = () => {
    const { actions: { handleUserConected } } = useAppContext();

    return (
        <div>
            <h1>Sign In</h1>
            <Button to='/home' onClick={() => handleUserConected()} >entrar</Button>
        </div>
    )
}

export default SignIn;

const Button = styled(Link)`
    background: yellow;
    color: #000;
`;
