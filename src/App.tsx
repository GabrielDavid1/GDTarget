//React
import { useState } from 'react';

//Styles
import {
  AppHeader,
  AppContainer,
  AppAside,
  AppMain,
  TitleArea,
  SectionArea,
  DesignComplement,
  SubTitle,
  AppFooter,
  AppContent,
  HeaderTitle,
  AppAsideHeader,
  AppAsideContent,
  MainPowerBar,
  MainDescriptionArea,
  MainPlayers,
} from "./AppStyle";
import "./styles/global.css";

//Components
import Card from "./components/Card/Card";
import { Wind } from "./components/Wind";
import PowerBar from "./components/PowerBar";
import Description from './components/Description';

function App() {
  const [power, setPower] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <AppContainer>
      <AppHeader>
        <TitleArea>
          <HeaderTitle> GDTarget </HeaderTitle>
        </TitleArea>
        <SectionArea>
          <DesignComplement />
          <SubTitle> {Wind(1)} </SubTitle>
        </SectionArea>
      </AppHeader>

      <AppAside>
        <AppAsideHeader> ACTIVITY LOG </AppAsideHeader>
        <AppAsideContent>
          <Card 
            index={0} 
            text="Testando kkkk Testando kkkk Testando kkkk kdfk kdffdk k dfkkf" 
            svgType="start"
          />
          <Card 
            index={1} 
            text="Testando kkkk Testando kkkk Testando kkkk" 
            svgType="firstHit"
          />
          <Card 
            index={2} 
            text="Testando kkkk Testando kkkk Testando kkkk" 
            svgType="shield"
          />
          <Card 
            index={3} 
            text="Testando kkkk Testando kkkk Testando kkkk" 
            svgType="fire"
          />
          <Card 
            index={4} 
            text="Testando kkkk Testando kkkk Testando kkkk" 
            svgType="life"
          />
        </AppAsideContent>
      </AppAside>

      <AppMain>
        <AppContent>
          <MainPowerBar> 
            <PowerBar value={power} isVisible />
          </MainPowerBar>

          <MainDescriptionArea> 
            {toggle ? <Description /> : null}
          </MainDescriptionArea>

          <MainPlayers> 
            players 
          </MainPlayers>
        </AppContent>
        <AppFooter></AppFooter>
      </AppMain>
    </AppContainer>
  );
}

export default App;
