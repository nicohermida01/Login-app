import React from 'react';

import CardNew from '../components/CardNew';
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
                <CardNew />
                    
                <ButtonsContainer>
                    <CreateAccountButton />
                    <CancelButton />
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default AddAccount;










