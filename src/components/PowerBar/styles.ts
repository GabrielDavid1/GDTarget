import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProgressBar = styled.progress`
    width: 25%;
    height: 10%;
    border-radius: 2px;
    background-color: white;
    accent-color: red;
    -webkit-appearance: none;
    &::-moz-progress-bar {
        background-color:  ${theme.elements.PROGRESS_BAR.color};
    }
    border: 1px solid ${theme.elements.PROGRESS_BAR.color};
    transition: all .15s;
`;