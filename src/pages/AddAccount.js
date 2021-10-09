import React from 'react';

import AccountCard from '../components/AccountCard';
import {
    Container,
    Title,
    MainContainer,
    ButtonsContainer
} from '../elements/PageElements';
import { LinkButton, Button } from '../elements/ButtonsElements';

const AddAccount = () => {
    return (
        <Container>
            <Title>New Account</Title>

            <MainContainer>
                <AccountCard readOnly={false}/>
                    
                <ButtonsContainer>
                    <Button>
                        Create Account
                    </Button>

                    <LinkButton to='/home'>
                        Cancel
                    </LinkButton>
                </ButtonsContainer>
            </MainContainer>
        </Container>
    )
}

export default AddAccount;










