//React
import { useEffect, useState } from 'react';

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
import Inclination from './components/Player/Inclination';

function App() {
  const [wind, setWind] = useState<number>(1);
  const [power, setPower] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);

  const [toggleShowMessage, setToggleShowMessage] = useState<boolean>(false);
  const [toggleAtackEvent, setToggleAtackEvent] = useState<boolean>(false);

  const [round, setRound] = useState<number>(0);

  function handleAtackEvent() {
    setToggleAtackEvent(!toggleAtackEvent);
    setTimeout(() => {
      setWind(1);
      setPower(0);
      setAngle(0);
    }, 4000);
  }

  useEffect(() => {
    if(round > 0) {
      setToggleShowMessage(true);
      setTimeout(() => {
        setRound(round+1);
        setToggleShowMessage(false);
      }, 100000);
    }
  }, [round]);

  return (
    <AppContainer>
      <AppHeader>
        <TitleArea>
          <HeaderTitle> GDTarget </HeaderTitle>
        </TitleArea>
        <SectionArea>
          <DesignComplement />
          <SubTitle> {Wind(wind)} </SubTitle>
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
            <PowerBar value={power} isVisible={true} />
            <Inclination 
              isVertically
              state={power} 
              setState={setPower} 
            />
          </MainPowerBar>

          <MainDescriptionArea> 
            {toggleShowMessage ? <Description /> : null}
          </MainDescriptionArea>

          <MainPlayers> 
            <Inclination 
              isVertically={false}
              state={angle} 
              setState={setAngle} 
            />
            <PlayerArea>
              <PlayerComponent
                wind={wind}
                angle={angle}
                power={power}
                percent_life="100%"
                stylePlayer={{
                  playerTextColor:'#565707',
                  playerBgColor:'#FEFFB9',
                  playerBorderColor:'#FCFF5A',
                }}
                toggleAtackEvent={toggleAtackEvent}
              />
              <PlayerComponent
                wind={wind}
                angle={angle}
                power={power}
                percent_life="100%"
                stylePlayer={undefined}
                toggleAtackEvent={toggleAtackEvent}
              />
            </PlayerArea> 
          </MainPlayers>
        </AppContent>
        <AppFooter>
                <button onClick={() => setRound(1)}>iniciar</button>
                <button onClick={handleAtackEvent}>atacar</button>
        </AppFooter>
      </AppMain>
    </AppContainer>
  );
}

export default App;
