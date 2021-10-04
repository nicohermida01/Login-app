import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import { ButtonDeleteAccount, ButtonEditAccount } from './Buttons';
import Card from '../elements/CardElements';
import CardForm from './CardForm';

const CardAccount = ({ platformName, platformType, username, password, email }) => {
    return (
        <Card>
            <CardHeader>
                <CardDetails>
                    <PlatformName>{platformName}</PlatformName>
                    <PlatformType>{platformType}</PlatformType>
                </CardDetails>
                <CardButtons>
                    <ButtonEditAccount />
                    <ButtonDeleteAccount />
                </CardButtons>
            </CardHeader>
            <CardForm 
                username={username}
                password={password}
                email={email}
            />
        </Card>
    )
}

export default CardAccount;

const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
`;

const PlatformName = styled.span`
    font-size: 26px;
    color: ${Colors.BASEBLUE4};
`;

const PlatformType = styled.span`
    font-size: 18px;
    color: ${Colors.BASEBLUE1};
    margin-top: 1px;
`;

const CardButtons = styled.div`
    display: flex;
    gap: 10px;
`;
