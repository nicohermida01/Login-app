import React from 'react';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import CardAccount from '../components/CardAccount';

const Home = () => {
    const AccountsData = [
        {
            id: 1,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 2,
            platformName: 'Instagram',
            platformType: 'Social',
            username: 'elJudio123',
            password: 'elameculos',
            email: 'callejas@correo.com'
        },
        {
            id: 3,
            platformName: 'Instagram',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 4,
            platformName: 'League of legends',
            platformType: 'Game',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 5,
            platformName: 'Counter strike',
            platformType: 'Game',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 6,
            platformName: 'GTA',
            platformType: 'Game',
            username: 'kylu',
            password: '123456',
            email: 'kylu@correo.com'
        },

    ];

    return (
        <HomeContainer>
            <Toolbar />
            <Grid>
                {
                    AccountsData.map((account) => {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0;
`;

const Grid = styled.div`
    width: 955px;
    margin: 50px 0;

    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;

    & > * {
        /* flex: 1; */
    }
`;