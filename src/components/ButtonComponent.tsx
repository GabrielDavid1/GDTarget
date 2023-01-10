interface Props {
  param: {
    type: string;
    payload?: any;
  };
  alterar: (value: any) => void;
}

const typeButton: any = {
  reset: () => "reset",
  increment: () => "+",
  decrement: () => "-",
};

const ButtonComponent = ({ param, alterar }: Props) => (
    <button
      id={param.type}
      onClick={() => alterar(param)}
    > 
        {typeButton[param.type]()}
    </button>
);

export default ButtonComponent;
