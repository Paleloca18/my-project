import { useState } from 'react';
import './App.css';

function App() {
  const [myText] = useState("Tu nombre");
  const [myValue, setMyValue] = useState("Jhon Doe");
  
  const handleInput = (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value);
  };

  return (
    <div>
      <h1>Hola buenas!</h1>
      <h2>{myValue}</h2>
      <input type="text" placeholder={myText} value={myValue} onChange={handleInput}/>
    </div>
  );
}

export default App