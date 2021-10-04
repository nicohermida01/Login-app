import React from 'react';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import CardAccount from '../components/CardAccount';

const Home = () => {
    return (
        <HomeContainer>
            <Toolbar />
            <CardAccount />
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0;
`;