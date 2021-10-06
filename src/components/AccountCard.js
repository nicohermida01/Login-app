import React, { useState } from 'react';
import styled from 'styled-components';

import Colors from '../commons/Colors';
import { ButtonDeleteAccount, ButtonEditAccount } from './Buttons';
import Images from '../commons/Images';

const AccountCard = ({ account }) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <CardContainer>
            <CardHeader>
                <CardDetails>
                    <PlatformName>{account.platformName}</PlatformName>
                    <PlatformType>{account.platformType}</PlatformType>
                </CardDetails>
                <CardButtons>
                    <ButtonEditAccount />
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
                            <HelpContainer>
                                <UnHidePassword onClick={() => setVisiblePassword(!visiblePassword)} />
                            </HelpContainer>
                        </InputContainer>
                    :
                        <InputContainer>
                            <Input 
                                type="password" 
                                value={account.password}
                                readOnly
                            />
                            <PasswordIcon />
                            <HelpContainer>
                                <HidePassword onClick={() => setVisiblePassword(!visiblePassword)} />
                            </HelpContainer>    
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

const PlatformName = styled.span`
    font-size: 26px;
    color: ${Colors.BASEBLUE4};
`;

const PlatformType = styled.span`
    font-size: 18px;
    color: ${Colors.BASEBLUE1};
    margin-top: 1px;

    position: absolute;
    top: 32px;
    left: 16px;
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

const HelpContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    & > svg {
        width: 20px;
        height: 20px;
        fill: ${Colors.BASEBLUE4};
        position: absolute;
        top: -26px;
        right: 0;
        cursor: pointer;
    }
`;

const UserIcon = styled(Images.user)``;
const PasswordIcon = styled(Images.lockPassword)``;
const EmailIcon = styled(Images.email)``;
const HidePassword = styled(Images.hidePassword)``;
const UnHidePassword = styled(Images.unHidePassword)``;
