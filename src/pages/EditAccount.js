import React from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    Title,
    MainContainer,
    ButtonsContainer
} from '../elements/PageElements';
import AccountCard from '../components/AccountCard';
import { ConfirmButton, CancelButton } from '../buttons/RectButtons';
import useGetAccount from '../hooks/useGetAccount';

const EditAccount = () => {
    const { id } = useParams();
    const account = useGetAccount(id);

    return (
        <Container>
            <Title>Edit Account</Title>

            <MainContainer>
                <AccountCard account={account} readOnly={false}/>
                    
                <ButtonsContainer>
                    <ConfirmButton />
                    <CancelButton />
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default EditAccount;
