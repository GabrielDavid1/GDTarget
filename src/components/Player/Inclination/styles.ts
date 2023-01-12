import styled from "styled-components";

interface Props {
   top: string;
}

export const InclinationWrapper = styled.div<Props>`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background-color: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  position: absolute;
  top: ${({ top }) => `${top}`};
  transform: rotate(270deg);
  display:flex;
  justify-content:center;
  align-items:center;
`;
