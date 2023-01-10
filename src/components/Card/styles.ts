import styled from "styled-components";
import { theme } from "../../styles/theme";

interface Props {
  opacity: number;
}

export const CardContainer = styled.div<Props>`
    width: auto;
    height: 15%;
    display:flex;
    align-items:center;
    border-radius: 10px;
    flex-direction: column;
    justify-content:center;
    opacity: ${({ opacity }) => `${opacity}%` };
    background-color: ${theme.elements.CARD.color};
    margin: 5%;
    padding: 5%;
`;

export const CardContent = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color:#170620;
`;