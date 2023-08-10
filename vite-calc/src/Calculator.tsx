import calc from './assets/styles/Calc.module.css';
import CalculatorField from './CalculatorField';
import ButtonBlock from './btnsComponent/ButtonBlock';
import { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [changeTheme, setChangeTheme] = useState(false);
  const [isNumClicked, setIsNumClicked] = useState(false);
  const [result, setResult] = useState('');

  const handleInputValueChange = (value: string) => {
    setInputValue((prevValue) => {
      if (typeof value === 'string' && value === '.' && !isNumClicked) {
        return prevValue;
      }
      setIsNumClicked(true);
      return prevValue + value;
    });
  };
  
  const clearInputValue = () => {
    setInputValue('')
    setResult('')
    setIsNumClicked(false);
  }

  const handleChangeToggle = () => {
    setChangeTheme(!changeTheme);
  };

  const handleEqualButtonClick = () => {
    try {
      const calculatedResult = eval(inputValue);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error ツ');
    }
  };

  return (
    <div className={`${calc.calculator} ${changeTheme ? calc.toggleTheme : ''}`}>
      <CalculatorField inputValue={inputValue} result={result}/>
      <ButtonBlock
        onThemeChange={handleChangeToggle}
        onButtonClick={handleInputValueChange}
        clearValue={clearInputValue}
        isNumClicked={isNumClicked}
        handleEqualButtonClick={handleEqualButtonClick}
      />
    </div>
  );
};

export default Calculator;
