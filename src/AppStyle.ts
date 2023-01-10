import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: red;
    flex-wrap: wrap;
`;

export const AppHeader = styled.header`
    width: 100%;
    height: 15%;
    background-color: yellow;
`;

export const AppAside = styled.aside`
    width: 25%;
    height: 100%;
    background-color: green;
`;

export const AppMain = styled.main`
    width: 75%;
    height: 100%;
    background-color: blue;
`;