import React from 'react';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import AccountCard from '../components/AccountCard';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { data: { userAccountsDisplay } } = useAppContext();

    return (
        <HomeContainer>
            <Toolbar />
            <Grid>
                {
                    userAccountsDisplay.map((account, index) => {
                        return(
                            <AccountCard key={index} account={account}/>
                        );
                    })
                }
            </Grid>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 470px);
    gap: 15px;
    overflow-y: scroll;
    justify-content: center;

    &::-webkit-scrollbar {
        display: none;
    }
`;