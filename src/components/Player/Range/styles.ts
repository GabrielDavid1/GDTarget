import styled from "styled-components";

interface Props {
    angle: number;
}

export const RangeContainer = styled.div`
    position: absolute;
    background-color:#ff5f5f3b;
    width: 7%;
    height: 10%;
    top: 75%;
    border-top-right-radius: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 2px 4px -1px #ffaeae,0px 4px 5px 0px #d98a8a,0px 1px 10px 0px #db7373;
    animation: range 2.5s infinite;
    border: 1px dashed red;
`;

export const Pointer = styled.div<Props>`
    transform: ${({ angle }) => `rotate(-${angle}deg)`};
    border: 1px dashed red;
    width: 250px;
    position: absolute;
    top: 50%;
    transition: all .1s;
    cursor:pointer;
    z-index: 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 15%;
`;