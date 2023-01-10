import { useReducer } from "react";
import { AppHeader, 
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
  AppAsideContent
} from "./AppStyle";
import "./styles/global.css";

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
  const initialCount = 0;
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <AppContainer>

      <AppHeader>
          <TitleArea> 
            <HeaderTitle> GDTarget </HeaderTitle>
          </TitleArea>
          <SectionArea> 
              <DesignComplement />
              <SubTitle> vento </SubTitle> 
          </SectionArea>
      </AppHeader>

      <AppAside>
        <AppAsideHeader> ACTIVITY LOG </AppAsideHeader>
        <AppAsideContent> 
        
        </AppAsideContent>
      </AppAside>

      <AppMain> 
        <AppContent>

        </AppContent>
        <AppFooter>

        </AppFooter>
      </AppMain>
      
    </AppContainer>
  );
}

export default App;
