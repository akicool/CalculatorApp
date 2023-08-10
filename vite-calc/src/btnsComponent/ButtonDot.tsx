import btnDot from '../assets/styles/button.module.css'

interface Props { 
    onClick: (value: string) => void;
    dotText: string;
    isNumClicked: boolean;
    dotClicked: boolean;
    setDotClicked: Function;
}

const ButtonDot = (props: Props) => {

  const handleButtonClick = () => {
    if (!props.dotClicked && props.isNumClicked) {
      props.onClick('.');
      props.setDotClicked(true);
    }
  };

  return (
    <button className={`${btnDot.button} ${btnDot.borderNone} ${btnDot.numText}`} onClick={handleButtonClick} disabled={props.dotClicked || !props.isNumClicked}>
      {props.dotText}
    </button>
  )
}

export default ButtonDot