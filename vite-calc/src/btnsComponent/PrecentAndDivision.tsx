import btnOperations from '../assets/styles/button.module.css';
import iconPrecent from '../../public/percent.svg';
import iconDivision from '../../public/division.svg';

interface Props {
  icon: string;
  equallyProps?: boolean;
  onClick: (value: string) => void;
  isNumClicked: boolean;
  precentAndDivisionClicked: boolean;
  setPrecentAndDivisionClicked: Function;
  operationClicked: boolean;
  setOperationClicked: Function;
  setDotClicked: Function;
}

const PrecentAndDivision = (props: Props) => {
  const arrayPrecentAndDivision: Array<string> = ['%', '/'];
  const arrayIcon: Array<string> = [iconPrecent, iconDivision];

  const defaultStyle = `${btnOperations.btnBackground} ${btnOperations.button}`;

  const handleOperation = (value: string) => {
    if (!props.precentAndDivisionClicked || !props.operationClicked || props.isNumClicked) {
      props.onClick(value);
      props.setPrecentAndDivisionClicked(true);
      props.setDotClicked(false);
    }
  };

  return (
    <>
      {arrayPrecentAndDivision.map((item, index) => (
        <button
          key={item}
          className={defaultStyle}
          onClick={() => handleOperation(item)}
          disabled={props.precentAndDivisionClicked || props.operationClicked || !props.isNumClicked} 
        >
          <img src={arrayIcon[index]} alt={item} />
        </button>
      ))}
    </>
  );
};

export default PrecentAndDivision;
