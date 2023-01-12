import { useState } from "react";
import Inclination from "../Inclination";

import { 
    Pointer, 
    RangeContainer 
} from "./styles";

export default function RangeArea() {  
    const [angle, setAngle] = useState<number>(1);
    return (
        <RangeContainer>
            <Inclination 
              angle={angle} 
              setAngle={setAngle} 
            />
           <Pointer angle={angle} />
        </RangeContainer>
    );
}