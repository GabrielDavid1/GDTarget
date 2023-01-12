import RangeArea from "./Range";
import { PlayerContainer } from "./styles";

interface StylePlayerProps {
    playerTextColor?:string;
    playerBgColor?:string;
    playerBorderColor?:string;
}

interface Props {
    percent_life:string;
    stylePlayer?: StylePlayerProps;
}

export default function PlayerComponent({ percent_life, stylePlayer }:Props) {
    return (
        <>
         <PlayerContainer stylePlayer={stylePlayer}>
             {percent_life}
         </PlayerContainer>
         {stylePlayer ? <RangeArea /> : null}
        </>
    );
}