import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = () => {
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  }

  const countDecreaseHandler = () => {
    setCount((prevState) => prevState - 1);
  }

  const buttonStyles = {
    padding: "20px, 0px, 20px, 0px"
  }


  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button style={buttonStyles} onClick={countIncreaseHandler}>Increment</button>
      </div>
      <div>
        <button style={buttonStyles} onClick={countDecreaseHandler}>Decrement</button>
      </div>
    </>
  )
}

export default App
