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
  PlayerArea,
} from "./AppStyle";
import "./styles/global.css";

//Components
import Card from "./components/Card/Card";
import { Wind } from "./components/Wind";
import PowerBar from "./components/PowerBar";
import Description from './components/Description';
import PlayerComponent from './components/Player';

function App() {
  const [power, setPower] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <AppContainer>
      <AppHeader>
        <TitleArea>
          <HeaderTitle> GDTarget </HeaderTitle>
        </TitleArea>
        <SectionArea>
          <DesignComplement />
          <SubTitle> {Wind(0)} </SubTitle>
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
            <PowerBar value={power} isVisible={false} />
          </MainPowerBar>

          <MainDescriptionArea> 
            {toggle ? <Description /> : null}
          </MainDescriptionArea>

          <MainPlayers> 
            <PlayerArea>
              <PlayerComponent
                percent_life="100%"
                stylePlayer={{
                  playerTextColor:'#565707',
                  playerBgColor:'#FEFFB9',
                  playerBorderColor:'#FCFF5A',
                }}
              />
              <PlayerComponent
                percent_life="100%"
                stylePlayer={undefined}
              />
            </PlayerArea> 
          </MainPlayers>
        </AppContent>
        <AppFooter></AppFooter>
      </AppMain>
    </AppContainer>
  );
}

export default App;
