//React
import { useReducer } from "react";

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
} from "./AppStyle";
import "./styles/global.css";

//Components
import Card from "./components/Card/Card";

function init(initialCount: number) {
  return {
    count: initialCount,
  };
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App() {
  const value:number = 1.1;
  const direction = (value > 0) ? '>>' : '<<';
  const wind:string = direction+value+direction;
  return (
    <AppContainer>
      <AppHeader>
        <TitleArea>
          <HeaderTitle> GDTarget </HeaderTitle>
        </TitleArea>
        <SectionArea>
          <DesignComplement />
          <SubTitle> {wind.replace("-", "")} </SubTitle>
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
        <AppContent></AppContent>
        <AppFooter></AppFooter>
      </AppMain>
    </AppContainer>
  );
}

export default App;
