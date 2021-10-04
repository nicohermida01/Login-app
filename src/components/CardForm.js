import React from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import Images from '../commons/Images';

const CardForm = ({ username, password, email }) => {
    return (
        <Form>
            <InputContainer>
                <Input 
                    type="text"
                    value={username}
                />
                <UserIcon />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="password" 
                    value={password}
                />
                <PasswordIcon />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="email" 
                    value={email}
                />
                <EmailIcon />
            </InputContainer>
        </Form>
    )
}

export default CardForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
`;

const InputContainer = styled.div`
    position: relative;

    & > svg {
        width: 18px;
        height: 18px;
        fill: ${Colors.BASEBLUE4};

        position: absolute;
        top: 5px;
        left: 0;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid ${Colors.BASEBLUE4};
    font-size: 20px;
    color: ${Colors.BASEBLUE4};
    font-family: Sansation, sans-serif;
    padding-left: 22px;
    padding-bottom: 3px;
`;

const UserIcon = styled(Images.user)``;
const PasswordIcon = styled(Images.lockPassword)``;
const EmailIcon = styled(Images.email)``;