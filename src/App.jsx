import { useState } from 'react';
import './App.css'

function App() {
  //let number = 0;
  const [number, setNumber] = useState(0);
  
  const addOne = () => {
    //number ++;
    setNumber(number + 1);
    //console.log(number);
  }
  
  return (
    <div>
      <button onClick={addOne}>Numero de clicks: {number}</button>
    </div>
  )
}

export default App