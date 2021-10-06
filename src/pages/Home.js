import React from 'react';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import CardAccount from '../components/CardAccount';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { data: { userAccounts } } = useAppContext();

    return (
        <HomeContainer>
            <Toolbar />
            <Grid>
                {
                    userAccounts.map((account) => {
                        return(
                            <CardAccount key={account.id}
                                platformName={account.platformName}
                                platformType={account.platformType}
                                username={account.username}
                                password={account.password}
                                email={account.email}
                            />
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