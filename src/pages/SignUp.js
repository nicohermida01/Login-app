import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    PictureApp,
    FormLogin,
    FormHeader,
    AppLogo,
    Title,
    Form,
    Input,
    SubmitBtn
} from './SignIn';
import Images from '../commons/Images';
import { useAppContext } from '../context/AppContext';

const SignUp = () => {
    const history = useHistory();
    const { actions: { handleUserConected } } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/home');
        handleUserConected();
    }

    return (
        <Container>
            <PictureApp />
            <FormLogin>
                <FormHeader>
                    <AppLogo src={Images.logoApp} alt="logo app" />
                    <Title>Welcome</Title>
                </FormHeader>

                <Form onSubmit={handleSubmit} signup>
                    <Input 
                        type="text" 
                        placeholder='Username'
                        required
                    />
                    <Input 
                        type="email" 
                        placeholder='Email'
                        required
                    />
                    <Input 
                        type="password" 
                        placeholder='Password'
                        required
                    />
                    <Input 
                        type="password" 
                        placeholder='Repeat password'
                        required
                    />
                    <SubmitBtn type='submit'>Sign up</SubmitBtn>
                </Form>
            </FormLogin>
        </Container>
    )
}

export default SignUp;
