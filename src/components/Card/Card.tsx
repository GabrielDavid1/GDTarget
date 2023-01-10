import { 
  CardContainer, 
  CardContent, 
} from "./styles";

interface Props {
  text:string;
  index:number;
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
}: Props) => (
  <CardContainer opacity={getOpacity[index]}>
    ok
    <CardContent>{text}</CardContent>
  
  </CardContainer>
);

export default Card;
