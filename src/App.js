import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increment = () => {
    return (
      setCounter(
        (prevCount) => {
          return prevCount + 1;
        }
      )
    )
  }

  const decrement = () => {
    return(
      setCounter(
        (prevCount) => {
          return (
            prevCount - 1
          )
        }
      )
    )
  }

  return (
    <div className="App">
      <button onClick={increment} >+</button>
      <h1>{counter}</h1>
      <button onClick={decrement} >-</button>
    </div>
  );
}

export default App;
