import { useState } from 'react';
import './App.css';
import Country from './components/Country';

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

      <Country 
        image="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
        title="Canada"
        cityName="Langley"
      />

      <Country
        image="https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
        title="USA"
        cityName="Seattle"
      />
    </>
  )
}

export default App
