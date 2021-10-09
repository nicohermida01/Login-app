import React from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    Title,
    MainContainer,
    ButtonsContainer
} from '../elements/PageElements';
import { Button, LinkButton } from '../elements/ButtonsElements';
import AccountCard from '../components/AccountCard';
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
                    <Button>
                        Confirm
                    </Button>

                    <LinkButton to='/home'>
                        Cancel
                    </LinkButton>
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default EditAccount;
