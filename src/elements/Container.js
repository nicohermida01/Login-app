import styled from "styled-components";

import Colors from "../commons/Colors";

const Container = styled.div`
    background: ${Colors.BASEBLUE1};
    width: 60%;
    max-width: 1110px;
    height: 80vh;
    max-height: 800px;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0, .5);
    overflow-y: hidden;
`;

export default Container;