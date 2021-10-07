import styled from "styled-components";

import Colors from '../commons/Colors';
import Images from '../commons/Images';

export const CardContainer = styled.div`
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

export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;

    position: relative;
`;

export const PlatformName = styled.input`
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

export const PlatformType = styled.input`
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

export const CardButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
`;

export const InputContainer = styled.div`
    position: relative;

    & > svg {
        fill: ${Colors.BASEBLUE4};
    }
`;

export const Input = styled.input`
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

export const UserIcon = styled(Images.user)`
    width: 20px;
    position: absolute;
    top: 2px;
    left: 0;
`;
export const PasswordIcon = styled(Images.password)`
    width: 18px;
    position: absolute;
    top: 2px;
    left: 0;
`;
export const EmailIcon = styled(Images.email)`
    width: 18px;
    position: absolute;
    top: 4px;
    left: 0;
`;

export const HidePasswordIcon = styled(Images.hidePassword)`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 0;
`;
export const UnHidePasswordIcon = styled(Images.unHidePassword)`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 0;
`;