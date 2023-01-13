import { ProgressBar } from "./styles";

interface Props { 
    value:number;
    isVisible?:boolean;
}

const PowerBar = ({value, isVisible}:Props) => ( 
    (isVisible) 
       ? <ProgressBar value={value} max="81" /> 
       : null
);

export default PowerBar;
