import styled from "styled-components";
import { theme } from "../../styles/theme";

interface Props {
    startAnimation: boolean;
}

export const MainDescriptionText = styled.main<Props>`
    font-family: 'Roboto', sans-serif;
    color: ${theme.fonts.DESCRIPTION_TEXT.color};
    font-size: ${theme.fonts.DESCRIPTION_TEXT.size};
    animation: ${({ startAnimation }) => `${ (startAnimation) ? 'show-up' : 'disappear' } 1s` };
`;