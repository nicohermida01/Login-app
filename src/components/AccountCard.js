import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Colors from '../commons/Colors';
import Images from '../commons/Images';
import { ButtonDeleteAccount, ButtonEditAccount } from '../buttons/CircleButtons';

const AccountCard = ({ account, readOnly }) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [platformNameInput, setPlatformNameInput] = useState('');
    const [platformTypeInput, setPlatformTypeInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [newCard, setNewCard] = useState(true);
    
    /* funcion para comprobar si tenemos una cuenta ya hecha */
    useEffect(() => {

        if (account) {
            /* HACER */
            /* Si tenemos una cuenta ya hecha => comprobamos que la cuenta es del usuario actual */
            /* Si la cuenta no pertenece al usuario actual => lo redireccionamos al home */
               
            setPlatformNameInput(account.platformName);
            setPlatformTypeInput(account.platformType);
            setUsernameInput(account.username);
            setPasswordInput(account.password);
            setEmailInput(account.email);
            setNewCard(false);
        }
    }, [account]);

    return (
        <CardContainer>
            <CardHeader>
                <CardDetails>
                    <PlatformName 
                        type='text' 
                        placeholder='Platform name'
                        value={platformNameInput}
                        onChange={(e) => setPlatformNameInput(e.target.value)}
                        readOnly={readOnly}
                        required
                    />
                    <PlatformType 
                        type='text' 
                        placeholder='Platform type'
                        value={platformTypeInput}
                        onChange={(e) => setPlatformTypeInput(e.target.value)}
                        readOnly={readOnly}
                        required
                    />
                </CardDetails>

                {
                    !newCard &&
                    <CardButtons>
                        <ButtonEditAccount id={account.id}/>
                        <ButtonDeleteAccount />
                    </CardButtons>
                }
            </CardHeader>

            <Form>
                <InputContainer>
                    <Input 
                        type='text'
                        placeholder='Username'
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        readOnly={readOnly}
                    />
                    <UserIcon />
                </InputContainer>

                {
                    visiblePassword ?
                        <InputContainer>
                            <Input 
                                type='text'
                                placeholder='Password'
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                readOnly={readOnly}
                                required
                            />
                            <PasswordIcon />
                            <UnHidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)}/>
                        </InputContainer>
                    :
                        <InputContainer>
                            <Input 
                                type='password'
                                placeholder='Password'
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                readOnly={readOnly}
                                required
                            />
                            <PasswordIcon />
                            <HidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)}/>
                        </InputContainer>
                }

                <InputContainer>
                    <Input 
                        type='email'
                        placeholder='Email'
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        readOnly={readOnly}
                    />
                    <EmailIcon />
                </InputContainer>
            </Form>
        </CardContainer>
    )
}

export default AccountCard;

const CardContainer = styled.div`
    width: 470px;
    height: 270px;
    background: ${Colors.BASEBLUE2};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 22px;
    padding-bottom: 50px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0, .25);
`;

const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;

    position: relative;
`;

const PlatformName = styled.input`
    background: none;
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 26px;
    color: ${Colors.BASEBLUE4};

    &::placeholder {
        color: ${Colors.BASEBLUE4};
    }
`;

const PlatformType = styled.input`
    background: none;
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 18px;
    color: ${Colors.BASEBLUE1};
    margin-top: 1px;

    position: absolute;
    top: 32px;
    left: 16px;

    &::placeholder {
        color: ${Colors.BASEBLUE1};
    }
`;

const CardButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
`;

const InputContainer = styled.div`
    position: relative;

    & > svg {
        fill: ${Colors.BASEBLUE4};
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
    padding-left: 22px;
    padding-bottom: 3px;

    &::placeholder {
        color: ${Colors.BASEBLUE4};
    }
`;

const UserIcon = styled(Images.user)`
    width: 20px;
    position: absolute;
    top: 2px;
    left: 0;
`;
const PasswordIcon = styled(Images.password)`
    width: 18px;
    position: absolute;
    top: 2px;
    left: 0;
`;
const EmailIcon = styled(Images.email)`
    width: 18px;
    position: absolute;
    top: 4px;
    left: 0;
`;

const HidePasswordIcon = styled(Images.hidePassword)`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 0;
`;
const UnHidePasswordIcon = styled(Images.unHidePassword)`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 0;
`;


