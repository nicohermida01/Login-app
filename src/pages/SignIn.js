import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Images from '../commons/Images';
import Colors from '../commons/Colors';
import { useAppContext } from '../context/AppContext';

const SignIn = () => {
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

                <Form onSubmit={handleSubmit}>
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
                    <SubmitBtn type='submit'>Sign in</SubmitBtn>
                </Form>
            </FormLogin>
        </Container>
    )
}

export default SignIn;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 450px;
`;

export const PictureApp = styled(Images.pictureApp)`
    width: 450px;
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const AppLogo = styled.img`
    width: 100px;
`;

export const Title = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
    color: ${Colors.BASEBLUE4};
`;

export const Form = styled.form`
    width: 350px;

    display: flex;
    flex-direction: column;
    gap: ${props => props.signup ? '30px' : '50px'}
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 3px solid ${Colors.BASEBLUE4};
    padding-bottom: 8px;
    font-size: 20px;
    color: ${Colors.BASEBLUE4};
    text-align: center;

    &::placeholder {
        color: ${Colors.BASEBLUE4};
    }
`;

export const SubmitBtn = styled.button`
    background: ${Colors.BASEBLUE4};
    width: 100%;
    height: 60px;
    border-radius: 30px;
    border: none;
    outline: none;
    color: ${Colors.BASEBLUE1};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    transition: .3s ease all;
    cursor: pointer;
    box-shadow: 0 4px 4px 0 rgba(0,0,0, .25);

    &:hover {
        background: ${Colors.BASEBLUE4HOVER};
    }
`;
