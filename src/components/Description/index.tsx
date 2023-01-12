import { useEffect, useState } from "react";
import { MainDescriptionText } from "./styles";

export default function Description() {

  const message = "Sua vez";

  const [animationState, setAnimationState] = useState<boolean>(true);
  const [closeComponent, setCloseComponent] = useState<boolean>(false);

  const waitTime = (type: string) => {
    const time = (type === "end-animation") ? 250 : 800;
    setTimeout(() => {
      (type === "closing-component") 
        ? setCloseComponent(true) 
        : setAnimationState(false);
    }, time);
  };

  useEffect(() => {
    setCloseComponent(false);
    setAnimationState(true);
    setTimeout(() => {
      waitTime("end-animation");
      waitTime("closing-component");
    }, 2000);
  }, []);

  return !closeComponent ? (
    <MainDescriptionText startAnimation={animationState}>
        {message}
    </MainDescriptionText>
  ) : null;
}
