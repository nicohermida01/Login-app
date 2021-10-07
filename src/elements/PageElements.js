import styled from "styled-components";

import Colors from '../commons/Colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 140px;
    padding: 30px 0 0 0;
`;

export const Title = styled.span`
    font-weight: bold;
    color: ${Colors.BASEBLUE4};
    font-size: 30px;
    text-transform: uppercase;
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 150px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;