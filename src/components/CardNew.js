import React, { useState } from 'react';

import {
    CardContainer,
    CardHeader,
    CardDetails,
    PlatformName,
    PlatformType,
    Form,
    InputContainer,
    Input,
    UserIcon,
    PasswordIcon,
    UnHidePasswordIcon,
    HidePasswordIcon,
    EmailIcon
} from '../elements/CardElements';

const CardNew = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [platformNameInput, setPlatformNameInput] = useState('');
    const [platformTypeInput, setPlatformTypeInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    return (
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
                            <UnHidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)} />
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
                            <HidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)} /> 
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

export default CardNew;
