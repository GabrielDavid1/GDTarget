import { useReducer } from 'react'
import ButtonComponent from "./components/ButtonComponent";

function init(initialCount:number) {  
  return {
    count: initialCount,
  };
}

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':      
      return init(action.payload);    
    default:
      throw new Error();
  }
}

function App() {
  const initialCount = 0;
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div className="main">
      <b >Contador: {state.count}</b> 
      <ButtonComponent 
        param={{type: "increment"}} 
        alterar={dispatch} 
      />
      <ButtonComponent 
        param={{type: 'reset', payload: initialCount}}
        alterar={dispatch} 
      />
      <ButtonComponent 
        param={{type: "decrement"}}
        alterar={dispatch} 
      />
    </div>
  );
}

export default App
