import styled from "styled-components";

interface Props {
  isVertically: boolean;
}

export const InclinationWrapper = styled.div<Props>`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  position: absolute;
  top:${({ isVertically }) => isVertically ? '20%' : '50%'};
  right:${({ isVertically }) => isVertically ? '0%' : '34%'};
  transform: ${({ isVertically }) => isVertically ? 'none' : 'rotate(270deg)'};
  display:flex;
  justify-content:center;
  align-items:center;
`;
