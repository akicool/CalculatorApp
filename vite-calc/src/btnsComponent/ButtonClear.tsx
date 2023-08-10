import btnClear from '../assets/styles/button.module.css'

interface Props {
    diffirentStyle?: boolean;
    onClick: () => void;
}

const ButtonClear = (props: Props) => {    
    return (
    <button className={`${btnClear.button} ${btnClear.numText} ${btnClear.borderNone} ${btnClear.specialButton}`} onClick={props.onClick}>
        AC
    </button>
  )
}

export default ButtonClear