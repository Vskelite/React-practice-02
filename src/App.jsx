import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = ()=>{
    useEffect ( ()=> {
      setTimeout( ()=>{
        setCount( count => count +1)},2000)},[count]
               }
  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick ={increaseCount}> Click Me</button>
    </>
  )
}
export default App
