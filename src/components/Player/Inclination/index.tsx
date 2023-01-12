import { InclinationWrapper } from "./styles";

interface Props {
    isVertically:boolean;
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function Inclination({ isVertically, state, setState }:Props) {
  const handleAngle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setState(Number(e.target.value))
  } 
  return (
    <> 
    <InclinationWrapper isVertically={isVertically}>
      <input 
        className="inclination" 
        type="range" 
        min="0" 
        max="90" 
        value={state}
        onChange={handleAngle}
        data-vertical="true"
       />
    </InclinationWrapper>
    </>
  );
}
