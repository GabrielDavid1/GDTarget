import { InclinationWrapper } from "./styles";

interface Props {
    angle: number;
    setAngle: React.Dispatch<React.SetStateAction<number>>;
}

export default function Inclination({ angle, setAngle }:Props) {
  const position = `
    -${document.documentElement.clientHeight*0.12}px
  `;
  const handleAngle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAngle(Number(e.target.value))
  } 
  return (
    <InclinationWrapper top={position}>
      <input 
        className="inclination" 
        type="range" 
        min="0" 
        max="90" 
        value={angle}
        onChange={handleAngle}
        data-vertical="true"
       />
    </InclinationWrapper>
  );
}
