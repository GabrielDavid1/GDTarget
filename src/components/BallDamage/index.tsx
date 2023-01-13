import { useEffect, useState } from "react";
import { BallDamageContainer } from "./styles";

interface Props {
    wind:number;
    power:number;
    angle:number;
    isPlayerTime:boolean;
    toggleAtackEvent:boolean;
}

export default function BallDamage ({ 
    wind,
    power,
    angle,
    isPlayerTime,
    toggleAtackEvent,
}:Props) {
    const deaultParams = 85;

    const [top, setTop] = useState<number>(deaultParams);
    const [right, setRight] = useState<number>(deaultParams);

    const handleCalc = () => {
        if(toggleAtackEvent) {
            const convertedWind = (wind*10);
            const topp = deaultParams-power;
            const rightt = deaultParams-angle;

            setTop(convertedWind-power);
            setRight(convertedWind-angle);

            setTimeout(() => {
                setTop(topp+convertedWind);
                setRight(rightt+convertedWind);
                setTimeout(() => {
                    setTop(deaultParams);
                    setRight(deaultParams);
                }, 1000);
            }, 1000);
        }
    }

    useEffect(() => {
        handleCalc();
    },[toggleAtackEvent]);

    return ( isPlayerTime ? <BallDamageContainer top={top} right={right} /> : null);
}