import React from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [operator, setOperator] = React.useState('');
  const [output, setOutput] = React.useState(0);
  // const [chainCheck, setChainCheck] = React.useState(0);



  const handleOperator = (input) => {

    //this sets the operator, calls clearFunction everything if input = 'c', calls operate function if input = '='
    //if an operator has already been selected

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
    setNumber1(0);
    setNumber2(0);
    setOperator('');
    setOutput(0);
  };


  const handleClick = (input) => {
  console.log("input:", input, "\nnum1:", number1, "\nnum2:", number2, "\noperator", operator, "\noutput", output);
 
    //This populates number1 or number2 with the user input. If an operator has been selected, it switches to populating number2.
    //nested if to determine if num1 or num2 already have 1 digit, if so, any additional digits are added on to the end
    
    if (!operator) {

      // if(number1 && input === '.') {
      //     //logic for adding decimals to number1 if number1 has already been set
      // } else if (input === '.') {
      //     //logic for adding decimals to number1 if number1 has not been set
      // }




      if (number1) {       
          setNumber1((number1*10) + input);
          setOutput((number1*10) + input);
      } else {
        setNumber1(number1 + input);
        setOutput(number1 + input)
        console.log("number1: "+number1);
      } 
    } else { 
      if (number2) { 
        setNumber2((number2*10) + input);
        setOutput((number2*10) + input);
      } else {
        setNumber2(number2 + input);
        setOutput(number2 + input)
        console.log("number2: "+number2);
      }
    };
  };  //end of handleClick function

  const operate = (number1, number2) => {   //
    console.log("operate function")
    if (operator === '+') {
      setNumber1(number1+number2);
      setOutput(number1+number2);
      setNumber2(0);
      setOperator('');
    } else if (operator === '-') {
      setNumber1(number1-number2);
      setOutput(number1-number2);
      setNumber2(0);
      setOperator('');
    } else if (operator === '*') {
      setNumber1(number1*number2);
      setOutput(number1*number2);
      setNumber2(0);
      setOperator('');
    } else if (operator === '/') {
      if (number2 === 0) {
        alert("No! Bad!");
        clearFunction();
      } else {
      setNumber1(number1/number2);
      setOutput(number1/number2);
      setNumber2(0);
      setOperator('');
      };
    };
  };    //end of operate function


  return (
    <div className="container">   
      <h1>Calculator</h1> 
      <div className="output">
        Display: {output}
        <br></br>
        number1: {number1}
        <br></br>
        number2: {number2}
      </div>
      <br></br><br></br><br></br>
      <div className="calcbuttons">
        <div className="numbers">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick(0)}>0</button>

        <button onClick={() => handleClick('.')}>.</button>  {/* needs functionality */}

        <button onClick={() => handleOperator('=')}>=</button>
        
        <button onClick={() => handleOperator('+')}>+</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleOperator('c')}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;