import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [resultVisible, setResultVisible] = useState(false);
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    // Reset input if there's already a result
    if (resultVisible) {
      setInput(value);
      setResult('');
      setResultVisible(false);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
    setResultVisible(false);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setResultVisible(true);
      setHistory((prevHistory) => [
        ...prevHistory,
        { expression: input, result: calculatedResult },
      ]);
    } catch (error) {
      setResult('Error');
      setResultVisible(true);
    }
  };

  const handleKeyDown = (event) => {
    const keyPressed = event.key;
    if (/^[0-9.+\-*/%]$/.test(keyPressed)) {
      handleInput(keyPressed);
    } else if (keyPressed === 'Enter') {
      calculateResult();
    } else if (keyPressed === 'Backspace') {
      handleBackspace();
     } else if(keyPressed === 'C' || 'c'){
        clearInput();
      }
    
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="numbers">
        <div className="input">
          <input
            type="text"
            value={resultVisible ? result : input}
            placeholder="0"
            readOnly
          />
        </div>
        <button onClick={() => handleInput('%')}>%</button>
        <button onClick={() => clearInput('C')}>C</button>
        <button onClick={() => handleBackspace('⌫')} className="back">⌫</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('/')}>÷</button>
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.expression} = {item.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
          }

export default App;
