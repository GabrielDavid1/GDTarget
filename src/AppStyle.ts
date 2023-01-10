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
    width: 15%;
    background-color: ${theme.colors.HEADER};
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
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.MAIN};
    border-top-left-radius: 20px;
`;

export const AppAside = styled.aside`
    width: 13.12%;
    height: 100%;
    background-image: ${theme.colors.ASIDE};
`;

export const AppMain = styled.main`
    width: 86.8%;
    height: 100%;
`;

export const AppContent = styled.main`
    width: 100%;
    height: 70%;
    background-color: ${theme.colors.MAIN};
`;

export const AppFooter = styled.main`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
`;