/* import React, { useState } from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import { ButtonDeleteAccount, ButtonEditAccount } from '../buttons/CircleButtons';
import Images from '../commons/Images';

const AccountCard = ({ account }) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [platformNameInput, setPlatformNameInput] = useState('');
    const [platformTypeInput, setPlatformTypeInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    if (account) {
        return (
            <CardContainer>
                <CardHeader>
                    <CardDetails>
                        <PlatformName 
                            type="text"
                            value={account.platformName}
                            readOnly
                        />
                        <PlatformType 
                            type="text"
                            value={account.platformType}
                            readOnly
                        />
                    </CardDetails>
    
                    <CardButtons>
                        <ButtonEditAccount id={account.id}/>
                        <ButtonDeleteAccount />
                    </CardButtons>
                </CardHeader>
    
                <Form>
                    <InputContainer>
                        <Input 
                            type="text"
                            value={account.username}
                            readOnly
                        />
                        <UserIcon />
                    </InputContainer>
    
                    {
                        visiblePassword ?
                            <InputContainer>
                                <Input 
                                    type="text" 
                                    value={account.password}
                                    readOnly
                                />
                                <PasswordIcon />
                                <UnHidePassword onClick={() => setVisiblePassword(!visiblePassword)} />
                            </InputContainer>
                        :
                            <InputContainer>
                                <Input 
                                    type="password" 
                                    value={account.password}
                                    readOnly
                                />
                                <PasswordIcon />
                                <HidePassword onClick={() => setVisiblePassword(!visiblePassword)} /> 
                            </InputContainer>
                    }
                    
                    <InputContainer>
                        <Input 
                            type="email" 
                            value={account.email}
                            readOnly
                        />
                        <EmailIcon />
                    </InputContainer>
                </Form>
            </CardContainer>
        )
    }
    else {
        return(
            <CardContainer>
                <CardHeader>
                    <CardDetails>
                        <PlatformName 
                            type="text"
                            placeholder='Platform name'
                            value={platformNameInput}
                            onChange={(e) => setPlatformNameInput(e.target.value)}
                        />
                        <PlatformType 
                            type="text"
                            placeholder='Platform type'
                            value={platformTypeInput}  
                            onChange={(e) => setPlatformTypeInput(e.target.value)}                    
                        />
                    </CardDetails>
                </CardHeader>

                <Form>
                    <InputContainer>
                        <Input 
                            type="text"
                            placeholder='Username'
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                        />
                        <UserIcon />
                    </InputContainer>
    
                    {
                        visiblePassword ?
                            <InputContainer>
                                <Input 
                                    type="text" 
                                    placeholder='Password'
                                    value={passwordInput}
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                />
                                <PasswordIcon />
                                <UnHidePassword onClick={() => setVisiblePassword(!visiblePassword)} />
                            </InputContainer>
                        :
                            <InputContainer>
                                <Input 
                                    type="password" 
                                    placeholder='Password'
                                    value={passwordInput}
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                />
                                <PasswordIcon />
                                <HidePassword onClick={() => setVisiblePassword(!visiblePassword)} /> 
                            </InputContainer>
                    }
                    
                    <InputContainer>
                        <Input 
                            type="email" 
                            placeholder='Email'
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <EmailIcon />
                    </InputContainer>
                </Form>
            </CardContainer>
        )
    }
}

export default AccountCard; */


