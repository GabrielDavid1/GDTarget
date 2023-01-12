import styled from "styled-components";
import { theme } from "../../styles/theme";

interface StylePlayerProps {
    playerTextColor?:string;
    playerBgColor?:string;
    playerBorderColor?:string;
}

interface Props {
    stylePlayer?: StylePlayerProps;
}

export const PlayerContainer = styled.div<Props>`
    width:5%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${({ stylePlayer }) => `${
        (stylePlayer) ? stylePlayer.playerTextColor : theme.elements.AI_ENEMY.text_color
    }` };
    background-color: ${({ stylePlayer }) => `${
        (stylePlayer) ? stylePlayer.playerBgColor : theme.elements.AI_ENEMY.color
    }` };
    border: ${({ stylePlayer }) => `1px solid ${
        (stylePlayer) ? stylePlayer.playerBorderColor : theme.elements.AI_ENEMY.border
    }` };
    border-top-right-radius: ${({ stylePlayer }) => `${
        (stylePlayer) ? '25px' : '0px'
    }` };
    border-top-left-radius: ${({ stylePlayer }) => `${
        (stylePlayer) ? '0px' : '25px'
    }` };
`;