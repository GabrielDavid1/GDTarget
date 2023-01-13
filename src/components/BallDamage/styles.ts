import styled from "styled-components";

interface Props {
    top:number;
    right:number;
}

export const BallDamageContainer = styled.div<Props>`
    width: 1%;
    height: 2%;
    border-radius: 100px;
    background-color: purple;
    position: absolute;
    z-index: -1;
    top: ${({ top }) => `${top}%`};
    right: ${({ right }) => `${right}%`};
    transition: all .5s;
`;