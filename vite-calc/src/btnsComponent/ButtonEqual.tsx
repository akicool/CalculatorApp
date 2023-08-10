import iconEqually from '../../public/equally.svg';
import btnOperations from '../assets/styles/button.module.css';

interface Props {
  onClick: (vlaue: string) => void;
  isNumClicked: boolean;
  operationClicked: boolean;
  setOperationClicked: Function;
  precentAndDivisionClicked: boolean;
  setPrecentAndDivisionClicked: Function;
  onEqualButtonClick: Function; 
}

const ButtonEqual = (props: Props) => {


  const handleEqualOperation = () => {
    if (!props.operationClicked || props.precentAndDivisionClicked || props.isNumClicked) {
      props.onClick('=');
      props.setOperationClicked(true);
      props.onEqualButtonClick();
    }
  };

  return (
    <button className={`${btnOperations.styleEqually} ${btnOperations.btnBackground} ${btnOperations.button}`}
     onClick={handleEqualOperation} 
     disabled={props.operationClicked || props.precentAndDivisionClicked || !props.isNumClicked}>
      <img src={iconEqually} alt="equal"/>
    </button>
  )
}

export default ButtonEqual