import BallDamage from "../BallDamage";
import RangeArea from "./Range";
import { LifeContainer, PlayerContainer } from "./styles";

interface StylePlayerProps {
    playerTextColor?:string;
    playerBgColor?:string;
    playerBorderColor?:string;
}

interface Props {
    wind: number;
    angle: number;
    power: number;
    percent_life:string;
    stylePlayer?: StylePlayerProps;
    toggleAtackEvent:boolean;
}

export default function PlayerComponent({ 
    wind,
    angle,
    power,
    percent_life, 
    stylePlayer,
    toggleAtackEvent,
}:Props) {
    const isPlayerTime = stylePlayer ? true : false;
    return (
        <>
         <PlayerContainer stylePlayer={stylePlayer}>
            <LifeContainer stylePlayer={stylePlayer}>
              {percent_life}
            </LifeContainer>
              <BallDamage 
                wind={wind}
                angle={angle}
                power={power}
                isPlayerTime={isPlayerTime}
                toggleAtackEvent={toggleAtackEvent}
              />
         </PlayerContainer>
         {stylePlayer ? <RangeArea angle={angle} /> : null}
        </>
    );
}