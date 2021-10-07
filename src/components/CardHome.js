import React, { useState } from 'react';

import {
    CardContainer,
    CardHeader,
    CardDetails,
    PlatformName,
    PlatformType,
    CardButtons,
    Form,
    InputContainer,
    Input,
    UserIcon,
    PasswordIcon,
    UnHidePasswordIcon,
    HidePasswordIcon,
    EmailIcon
} from '../elements/CardElements';
import { ButtonDeleteAccount, ButtonEditAccount } from '../buttons/CircleButtons';

const CardHome = ({ account }) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

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
                                <UnHidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)} />
                            </InputContainer>
                        :
                            <InputContainer>
                                <Input 
                                    type="password" 
                                    value={account.password}
                                    readOnly
                                />
                                <PasswordIcon />
                                <HidePasswordIcon onClick={() => setVisiblePassword(!visiblePassword)} /> 
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

export default CardHome;
