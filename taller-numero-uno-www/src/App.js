// TODO: importamos el hook usestate para poder hacer uso de el
import { React, useState } from 'react';

// ? por ser un ejercisio censillo haremos todo en el mismo componente app
function App() {

  const [display, setDisplay] = useState('');

  // ? creamos la funcion que va a hacer que nuestros clicks cumplan su funcion
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  // ? creamos la funcion que va a realizar nuestros calculos o arrojar "ERROR" al realizar un calculo incorrecto
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // ? esta funcion simplemente limpiara la pantalla de la calculadora
  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => clearDisplay()}>C</button>
      </div>
    </div>
  );
}

export default App;
