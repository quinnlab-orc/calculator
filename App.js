import React from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [operator, setOperator] = React.useState('');
  const [output, setOutput] = React.useState('');



  const handleOperator = (input) => {
    //this sets the operator, calls clearFunction everything if input = 'c', calls operate function if input = '='
    //if an operator has already been selected it sends num1 and num2 to operate() and after stores the new operator
    if (input === '+') {
      if (operator) {
        operate(number1, number2);
        setOperator(input);
      } else {
        setOperator(input);
      }
    } else if (input === '-') {
      if (operator) {
        operate(number1, number2);
        setOperator(input);
      } else {
      setOperator(input);
      }
    } else if (input === '*') {
      if (operator) {
        operate(number1, number2);
        setOperator(input);
      } else {
        setOperator(input);
      }
    } else if (input === '/') {
      if (operator) {
        operate(number1, number2);
        setOperator(input);
      } else {
        setOperator(input);
      }
    } else if (input === '=') {
      //operate function goes here
      operate(number1, number2)
    } else if (input === 'c') {
      clearFunction();
    }
  };    //end of handleOperator function

  function clearFunction()  {
    setNumber1('');
    setNumber2('');
    setOperator('');
    setOutput('');
  };


  const handleClick = (input) => {
  console.log("input:", input, "\nnum1:", number1, "\nnum2:", number2, "\noperator", operator, "\noutput", output);
    //This populates number1 or number2 with the user input. If an operator has been selected, it switches to populating number2.
    //nested if to determine if num1 or num2 already have 1 digit, if so, any additional digits are added on to the end
    if (!operator) {
      setNumber1(number1 + input);
      setOutput(number1 + input);
      console.log("number1: "+number1); 
    } else { 
      setNumber2(number2 + input);
      setOutput(number2 + input);
      console.log("number2: "+number2);
      }
  };    //end of handleClick function

  const operate = (number1, number2) => {
    //takes number1 and number2 a performs an operation on it based on the value of 'operator'
    if (operator === '+') {
      if ((parseFloat(number1)+parseFloat(number2)) % 1 !== 0) {
        let roundedOutput = (parseFloat(number1)+parseFloat(number2)).toFixed(4);
        setNumber1(roundedOutput);
        setOutput(roundedOutput);
        setNumber2('');
        setOperator('');
      } else {
        setNumber1(parseFloat(number1)+parseFloat(number2));
        setOutput(parseFloat(number1)+parseFloat(number2));
        setNumber2('');
        setOperator('');
      }
    } else if (operator === '-') {
      if ((parseFloat(number1)-parseFloat(number2)) % 1 !== 0) {
        let roundedOutput = (parseFloat(number1)-parseFloat(number2)).toFixed(4);
        setNumber1(roundedOutput);
        setOutput(roundedOutput);
        setNumber2('');
        setOperator('');
      } else {
        setNumber1(parseFloat(number1)-parseFloat(number2));
        setOutput(parseFloat(number1)-parseFloat(number2));
        setNumber2('');
        setOperator('');
      }
    } else if (operator === '*') {
      if ((parseFloat(number1)*parseFloat(number2)) % 1 !== 0) {
        let roundedOutput = (parseFloat(number1)*parseFloat(number2)).toFixed(4);
        setNumber1(roundedOutput);
        setOutput(roundedOutput);
        setNumber2('');
        setOperator('');
      } else {
        setNumber1(parseFloat(number1)*parseFloat(number2));
        setOutput(parseFloat(number1)*parseFloat(number2));
        setNumber2('');
        setOperator('');
      }
    } else if (operator === '/') {
      if (number2 === '0') {
        alert("No! Bad!");
        clearFunction();
      } else if ((parseFloat(number1)/parseFloat(number2)) % 1 !== 0){
        let roundedOutput = (parseFloat(number1)/parseFloat(number2)).toFixed(4);
        setNumber1(roundedOutput);
        setOutput(roundedOutput);
        setNumber2('');
        setOperator('');
      } else {
        setNumber1(parseFloat(number1)/parseFloat(number2));
        setOutput(parseFloat(number1)/parseFloat(number2));
        setNumber2('');
        setOperator('');
      };
    };
  };    //end of operate function


  return (
    <body className="body">
      <div className="container">   
        <h1>Calculator</h1> 
        <div className="display">
          <br></br>
          {output}
        </div>
        <div className="calcbuttons">
          <div className="numbers">
            <div className="row">
              <button className="num" onClick={() => handleClick(7)}>7</button>
              <button className="num" onClick={() => handleClick(8)}>8</button>
              <button className="num" onClick={() => handleClick(9)}>9</button>
              <button onClick={() => handleOperator('c')}>Clear</button>
            </div>
            <div className="row">
              <button className="num" onClick={() => handleClick(4)}>4</button>
              <button className="num" onClick={() => handleClick(5)}>5</button>
              <button className="num" onClick={() => handleClick(6)}>6</button>
              <button onClick={() => handleOperator('+')}>+</button>
              <button onClick={() => handleOperator('-')}>-</button>
            </div>
            <div className="row">
              <button className="num" onClick={() => handleClick(1)}>1</button>
              <button className="num" onClick={() => handleClick(2)}>2</button>
              <button className="num" onClick={() => handleClick(3)}>3</button>
              <button onClick={() => handleOperator('*')}>*</button>
              <button onClick={() => handleOperator('/')}>/</button>
            </div>
            <div className="row">
              <button className="num" onClick={() => handleClick(0)}>0</button>
              <button onClick={() => handleClick('.')}>.</button>
              <button onClick={() => handleOperator('=')}>=</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;