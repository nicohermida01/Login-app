import styled from "styled-components";

import Colors from "../commons/Colors";

const Card = styled.div`
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

export default Card;