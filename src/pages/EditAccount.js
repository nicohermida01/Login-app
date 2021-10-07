import React from 'react';

import {
    Container,
    Title,
    MainContainer,
    ButtonsContainer
} from '../elements/PageElements';
import CardEdit from '../components/CardEdit';
import { ConfirmButton, CancelButton } from '../buttons/RectButtons';

const EditAccount = () => {
    return (
        <Container>
            <Title>Edit Account</Title>

            <MainContainer>
                <CardEdit />
                    
                <ButtonsContainer>
                    <ConfirmButton />
                    <CancelButton />
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default EditAccount;
