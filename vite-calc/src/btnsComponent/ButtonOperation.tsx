import btnOperations from '../assets/styles/button.module.css';
import iconMultiply from '../../public/multiply.svg';
import iconMinus from '../../public/minus.svg';
import iconPlus from '../../public/plus.svg';

interface Props {
  icon: string;
  equallyProps?: boolean;
  onClick: (value: string) => void;
  isNumClicked: boolean;
  operationClicked: boolean;
  setOperationClicked: Function;
  precentAndDivisionClicked: boolean;
  setPrecentAndDivisionClicked: Function;
  setDotClicked: Function;
}

const ButtonOperation = (props: Props) => {
  
  const arrayOperation: Array<string> = ['*', '-', '+'];
  const arrayIcon: Array<string> = [iconMultiply, iconMinus, iconPlus];

  const defaultStyle = `${btnOperations.btnBackground} ${btnOperations.button}`;

  const handleOperation = (value: string) => {
    if (!props.operationClicked || props.precentAndDivisionClicked || props.isNumClicked) {
      props.onClick(value);
      props.setOperationClicked(true);
      props.setDotClicked(false);
    }
  };

  return (
    <>
      {arrayOperation.map((item, index) => (
        <button
          key={item}
          className={`
            ${defaultStyle}
          `}
          onClick={() => handleOperation(item)}
          disabled={props.operationClicked || props.precentAndDivisionClicked || !props.isNumClicked}
        >
          <img src={arrayIcon[index]} alt={item} />
        </button>
      ))}
    </>
  );
};

export default ButtonOperation;
