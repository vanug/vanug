import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)

    //  let counter = 5

    const addvalue =()=>{

      console.log("clicked",counter);
    //  counter= counter+1;
     setCount(counter+1)

     }
     const removevalue =()=>{
      setCount(counter-1)
    }


  return (
    <>
     <h1>chai aur react</h1>
     <h2>Countervalue {counter}</h2>
     <button
     onClick={addvalue}
     >Add Value</button>
      <button
      onClick={removevalue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
