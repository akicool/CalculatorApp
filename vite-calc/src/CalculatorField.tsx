import calc from './assets/styles/Calc.module.css';

interface Props {
  inputValue: string | number;
  result: string | number;
} 

const CalculatorField = (props: Props) => {
  return (
    <div className={calc.calculator__field}>
      <div className={`${calc.calculations} ${calc.margin} ${calc.padding}`}>
        <input
          type='text'
          className={calc.calculations__input}
          value={props.inputValue}
          readOnly
        />
        <h1 className={calc.calculations__answer}>{props.result}</h1>
      </div>
    </div>
  );
};

export default CalculatorField;
