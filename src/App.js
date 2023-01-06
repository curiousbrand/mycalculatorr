import {React,useState} from 'react';
import Input from './Input'
import './App.css';




function App() { 
const[text, setText] = useState("");
const[result, setResult] = useState("");


const addtoDisplay = (e) => {
  setText(text.concat (e.target.value));
}

const clearDisplay = (e) => {
  setText("");
  setResult("");
}

const addResult = () => {
  try {
  setResult(eval(text));
  } catch(err) {
    setText("0");
    setResult("Error");
  }
}
  return ( 
    <div className="App">
      <div className="grid-container">
        <Input text={text} result={result}/>
            <button className="grid-item grid-item-AC" onClick={clearDisplay} value="clear" >AC</button>
            <button className="grid-item grid-item-plusminus">+/-</button>
            <button className="grid-item grid-item-percent"  onClick={addtoDisplay} value="%">%</button>
            <button className="grid-item grid-item-divide" onClick={addtoDisplay} value="/">/</button>


            <button className="grid-item grid-item-7" onClick={addtoDisplay} value="7">7</button>
            <button className="grid-item grid-item-8" onClick={addtoDisplay} value="8">8</button>
            <button className="grid-item grid-item-9" onClick={addtoDisplay}  value="9">9</button>
            <button className="grid-item grid-item-multiply"  onClick={addtoDisplay} value="*">x</button>

            <button className="grid-item grid-item-4" onClick={addtoDisplay} value="4">4</button>
            <button className="grid-item grid-item-5" onClick={addtoDisplay} value="5">5</button>
            <button className="grid-item grid-item-6" onClick={addtoDisplay} value="6">6</button>
            <button className="grid-item grid-item-subtract" onClick={addtoDisplay} value="-">-</button>

            <button className="grid-item grid-item-1" onClick={addtoDisplay} value="1">1</button>
            <button className="grid-item grid-item-2" onClick={addtoDisplay} value="2">2</button>
            <button className="grid-item grid-item-3" onClick={addtoDisplay} value="3">3</button>
            <button className="grid-item grid-item-add" onClick={addtoDisplay} value="+">+</button>

            <button className="grid-item grid-item-0" onClick={addtoDisplay} value="0">0</button>
            <button className="grid-item grid-item-decimal"  onClick={addtoDisplay} value=".">.</button>
            <button className="grid-item grid-item-equals"  onClick={addResult} value="equal">=</button>
        </div>
     </div>
  );
}

export default App;
