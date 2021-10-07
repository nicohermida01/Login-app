import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import AccountCard from '../components/AccountCard';
import { CreateAccountButton, CancelButton } from '../buttons/RectButtons';

const AddAccount = () => {
    return (
        <Container>
            <Title>New Account</Title>

            <CreateAccountContainer>
                <AccountCard />
                    
                <ButtonsContainer>
                    <CreateAccountButton />
                    <CancelButton />
                </ButtonsContainer>
            </CreateAccountContainer>
        </Container>
    )
}

export default AddAccount;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 140px;
    padding: 30px 0 0 0;
`;

const Title = styled.span`
    font-weight: bold;
    color: ${Colors.BASEBLUE4};
    font-size: 30px;
    text-transform: uppercase;
`;

const CreateAccountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 150px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;


