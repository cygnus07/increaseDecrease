import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);

  const increaseValue = () => {
    // if(counter<20)

    // react passes these changes in batches so even if i write it multiple times
    // it will only update the value once
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    // in order to change the value everytime
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    }

  const decreaseValue = () => {
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Increase Or Decrease</h1>
      <h2>Counter: {counter} </h2>
      <button
      onClick={increaseValue}
      >
        <h3>Increase the value</h3>
      </button>
      <br />
      <button onClick={decreaseValue}>
        <h3>Decrease the value</h3>
      </button>
    </>
  )
}

export default App
