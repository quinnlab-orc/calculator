import React from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [operator, setOperator] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [outputLoop, setOutputLoop] = React.useState('');

  const handleClick = (input) => {
  console.log("input:", input, "\nnum1:", number1, "\nnum2:", number2, "\noperator", operator, "\noutput", output, "\noutputLoop", outputLoop);
 
    //This populates number1 or number2 with the user input. If an operator
    //has been selected, it switches to populating number2.
    
    if (!operator) {
      setNumber1(number1 + input);
      setOutput(number1 + input)
      console.log("number1: "+number1); 
    } else {  
      setNumber2(number2 + input);
      setOutput(number2 + input)
      console.log("number2: "+number2);
    }

    //potential solution to being able to chain operations
    // if (outputLoop && operator) {
    //   setNumber1(outputLoop);
    // };


    //this sets the operator and clears everything if input = 'c'
    if (input === '+') {
      setOperator(input);
    } else if (input === '-') {
      setOperator(input);
    } else if (input === '*') {
      setOperator(input);
    } else if (input === '/') {
      setOperator(input);
    } else if (input === 'c') {
      setNumber1('');
      setNumber2('');
      setOperator('');
      setOutput('');
    }





    //this performs the calculations based off of the selected operator
    if (input === '=' && number1.includes('+')) {
      number1.replace("+", "");
      setOutput(parseFloat(number1) + parseFloat(number2));
      clearFunction();
      setOutputLoop(parseFloat(number1) + parseFloat(number2));
    } else if (input === '=' && number1.includes('-')) {
      number1.replace("-", "");
      setOutput(parseFloat(number1) - parseFloat(number2));
      clearFunction();
      setOutputLoop(parseFloat(number1) + parseFloat(number2));
    } else if (input === '=' && number1.includes('*')) {
      number1.replace("*", "");
      setOutput(parseFloat(number1) * parseFloat(number2));
      clearFunction();
      setOutputLoop(parseFloat(number1) + parseFloat(number2));
    } else if (input === '=' && number1.includes('/')) {
      number1.replace("/", "");
      setOutput(parseFloat(number1) / parseFloat(number2));
      clearFunction();
      setOutputLoop(parseFloat(number1) + parseFloat(number2));
    }

    function clearFunction()  {
      setNumber1("");
      setNumber2("");
      setOperator("");
    };



  }


  return (
    <div className="container">   
      <h1>Calculator</h1> 
      <div className="output">
        output: {output}
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
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('c')}>Clear</button>
        </div>
      </div>
    </div>
  );
}



export default App;
