import btn from '../assets/styles/button.module.css';

interface Props {
    themeAttr: string;
    onClick: () => void;
}

const ButtonTheme = (props: Props) => {
  return (
    <button className={`${btn.button} ${btn.border}`} onClick={props.onClick}>
        <img src={props.themeAttr} alt="light"/>
    </button>
  )
}

export default ButtonTheme