import btnNum from '../assets/styles/button.module.css'

interface Props {
    onClick: Function;
}

const ButtonNum = (props: Props) => {

  const numArray: Array<number> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

  const buttonDefault = `
      ${btnNum.button} 
      ${btnNum.borderNone} 
      ${btnNum.numText}
  `;

  const handleClick = (value: number | string) => {
    props.onClick(value); 
  };
    
  return (
    numArray.map((item, index) => (
      <button 
        key={item} className={`${buttonDefault}`} 
        onClick={() => handleClick(item.toString())} 
        style={index === numArray.length - 1 ? {order: 1} : {}}
      >
        {item}
      </button>
      )
    )
  )
}

export default ButtonNum