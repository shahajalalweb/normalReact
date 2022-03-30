import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const handleClick1 = () => {
    setCounter(counter + 1)
  }

  const handleClick2 = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleClick1}>Increment</button>
      <button onClick={handleClick2}>Decrement</button>
    </div>
  )
}

export default App;
