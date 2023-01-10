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
  AppContent
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
          <TitleArea> 1 </TitleArea>
          <SectionArea> 
              <DesignComplement />
              <SubTitle> vento </SubTitle> 
          </SectionArea>
      </AppHeader>
      <AppAside>aside</AppAside>
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
