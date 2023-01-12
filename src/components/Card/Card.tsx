import { 
  CardContainer, 
  CardContent, 
} from "./styles";
import svg from "../../assets/svg/Svg";

interface Props {
  text:string;
  index:number;
  svgType:string;
}

const getOpacity: any = {
  0: 100,
  1: 85,
  2: 70,
  3: 50,
  4: 30
};

const Card = ({ 
  text, 
  index,
  svgType,
}: Props) => (
  <CardContainer opacity={getOpacity[index]}>
    {(svg as any)[svgType]}
    <CardContent>{text}</CardContent>
  </CardContainer>
);

export default Card;
