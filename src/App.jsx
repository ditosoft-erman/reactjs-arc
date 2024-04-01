import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState ([]);
  const [result, setResult] = useState ("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(""); 
  }
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      const historyItem = { expression: input, result: calculatedResult };
      setHistory((prevHistory) => [...prevHistory, historyItem]);
      setResult(calculatedResult);
      setInput(calculatedResult.toString()); 
      setResult("Error");
    }
    catch (Error){
      setResult("Error")
  };
  }
  



  return (
    <>
    <div className= "numbers">
      <div className="input">
        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0"/>
      </div>
  <button onClick ={() => handleInput ("%")}>%</button>
  <button onClick={clearInput}>C</button>
  <button onClick ={() => handleBackspace ("⌫")}>⌫</button>
  <button onClick ={() => handleInput ("0")}>0</button>
  <button onClick ={() => handleInput ("1")}>1</button>
  <button onClick ={() => handleInput ("2")}>2</button>
  <button onClick ={() => handleInput ("+")}>+</button>
  <button onClick ={() => handleInput ("3")}>3</button>
  <button onClick ={() => handleInput ("4")}>4</button>
  <button onClick ={() => handleInput ("5")}>5</button>
  <button onClick ={() => handleInput ("-")}>-</button>
  <button onClick ={() => handleInput ("6")}>6</button>
  <button onClick ={() => handleInput ("7")}>7</button>
  <button onClick ={() => handleInput ("8")}>8</button>
  <button onClick ={() => handleInput ("X")}>X</button>
  <button onClick ={() => handleInput ("9")}>9</button>
  <button onClick ={() => handleInput (".")}>.</button>
  <button onClick ={calculateResult}>=</button>
  <button onClick ={() => handleInput ("÷")}>÷</button>
  </div></>
    
  )
}

export default App
