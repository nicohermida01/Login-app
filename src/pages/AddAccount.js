import React from 'react';

import AccountCard from '../components/AccountCard';
import { CreateAccountButton, CancelButton } from '../buttons/RectButtons';
import {
    Container,
    Title,
    MainContainer,
    ButtonsContainer
} from '../elements/PageElements';

const AddAccount = () => {
    return (
        <Container>
            <Title>New Account</Title>

            <MainContainer>
                <AccountCard />
                    
                <ButtonsContainer>
                    <CreateAccountButton />
                    <CancelButton />
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default AddAccount;










