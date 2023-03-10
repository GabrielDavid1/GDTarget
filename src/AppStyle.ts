import styled from "styled-components";
import { theme } from "./styles/theme";

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;
    background-color: ${theme.colors.HEADER};
`;

export const AppHeader = styled.header`
    display: flex;
    width: 100%;
    height: 15%;
`;

export const TitleArea = styled.div`
    width: 15.1%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: end;
    color: ${theme.fonts.HEADER_TITLE.color}; 
    background-color: ${theme.colors.HEADER};
    font-size: ${theme.fonts.HEADER_TITLE.size};
    position: relative;
    z-index: 2;
`;

export const HeaderTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
`;

export const SectionArea = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const DesignComplement = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.HEADER};
    position:relative;
    z-index: 2;
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.MAIN};
    border-top-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fonts.WIND_TITLE.size};
`;

export const AppAside = styled.aside`
    width: 13.12%;
    height: 100%;
    background-image: ${theme.colors.ASIDE};
    position: relative;
    z-index: 2;
`;

export const AppAsideHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    color: ${theme.fonts.ACTIVITY_TITLE.color};
    font-size: ${theme.fonts.ACTIVITY_TITLE.size};
`;

export const AppAsideContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const AppMain = styled.main`
    width: 86.88%;
    height: 100%;
`;

export const AppContent = styled.div`
    width: 100%;
    height: 70%;
    background-color: ${theme.colors.MAIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainPowerBar = styled.main`
    width: 100%;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const MainDescriptionArea = styled.main`
    width: 100%;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const MainPlayers = styled.main`
    width: 100%;
    height: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-content: center;
`;

export const PlayerArea = styled.main`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AppFooter = styled.main`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    position: relative;
    z-index: 1;
`;