import { 
    Pointer, 
    RangeContainer 
} from "./styles";

interface Props {
    angle:number;
}

export default function RangeArea({ angle }:Props) {  
    return (
        <RangeContainer>
          <Pointer angle={angle} />
        </RangeContainer>
    );
}