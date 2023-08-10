import btnBlock from '../assets/styles/buttonBlock.module.css';
import ButtonTheme from './ButtonTheme';
import ButtonNum from './ButtonNum';
import ButtonOperation from './ButtonOperation';
import PrecentAndDivision from './PrecentAndDivision';
import ButtonEqual from './ButtonEqual'
import ButtonClear from './ButtonClear';
import ButtonDot from './ButtonDot';
import themeIconLight from '../../public/light.svg';
import themeIconDark from '../../public/dark.svg';
import iconPrecent from '../../public/percent.svg';
import iconMultiply from '../../public/multiply.svg';
import { useState } from 'react';

interface themeProps {
  onThemeChange: Function;
  onButtonClick: Function;
  clearValue: Function;
  handleEqualButtonClick: Function;
}

const ButtonBlock = ({ onThemeChange, onButtonClick, clearValue, handleEqualButtonClick }: themeProps) => {
  const [buttonBlockColor, setButtonBlockColor] = useState(true);
  const [icon, setIcon] = useState(themeIconLight);
  const [isNumClicked, setIsNumClicked] = useState(false);
  const [dotClicked, setDotClicked] = useState(false);
  const [operationClicked, setOperationClicked] = useState(false);
  const [precentAndDivisionClicked, setPrecentAndDivisionClicked] = useState(false);

  const handleButtonThemeClick = () => {
    setButtonBlockColor(!buttonBlockColor);
    setIcon(buttonBlockColor ? themeIconDark : themeIconLight);
    onThemeChange();
  };

  const inputChange = (value: string) => {
    onButtonClick(value);
    setIsNumClicked(true);
    setOperationClicked(false);
    setPrecentAndDivisionClicked(false);
};

const clearButtonValue = () => {
    clearValue();
    setIsNumClicked(false);
    setDotClicked(false);
    setOperationClicked(false);
    setPrecentAndDivisionClicked(false);
  };

  return (
    <div
      className={btnBlock.block}
      style={{
        backgroundColor: buttonBlockColor
          ? 'var(--dark-theme-background)'
          : 'var(--light-theme-background)',
      }}
    >
      <div className={btnBlock.btnWrap}>
        <div className={btnBlock.numContainer}>
          <div className={btnBlock.row}>
            <ButtonTheme themeAttr={icon} onClick={handleButtonThemeClick} />
            <PrecentAndDivision
              icon={iconPrecent}
              onClick={inputChange}
              isNumClicked={isNumClicked}
              precentAndDivisionClicked={precentAndDivisionClicked}
              setPrecentAndDivisionClicked={setPrecentAndDivisionClicked}
              operationClicked={operationClicked}
              setOperationClicked={setOperationClicked} 
              setDotClicked={setDotClicked}
            />
          </div>
          <div className={btnBlock.numSection}>
            <ButtonNum onClick={inputChange} />
            <ButtonClear onClick={clearButtonValue} />
            <div className={btnBlock.row}>
              <ButtonDot
                onClick={inputChange}
                dotText="."
                isNumClicked={isNumClicked}
                dotClicked={dotClicked}
                setDotClicked={setDotClicked}
              />
            </div>
          </div>
        </div>
        <div className={btnBlock.column}>
          <ButtonOperation
            icon={iconMultiply}
            onClick={inputChange}
            isNumClicked={isNumClicked}
            operationClicked={operationClicked}
            setOperationClicked={setOperationClicked}
            precentAndDivisionClicked={precentAndDivisionClicked}
            setPrecentAndDivisionClicked={setPrecentAndDivisionClicked}
            setDotClicked={setDotClicked}
          />
          <ButtonEqual
            onEqualButtonClick={handleEqualButtonClick}
            onClick={inputChange}
            isNumClicked={isNumClicked}
            operationClicked={operationClicked}
            setOperationClicked={setOperationClicked}
            precentAndDivisionClicked={precentAndDivisionClicked}
            setPrecentAndDivisionClicked={setPrecentAndDivisionClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonBlock;
