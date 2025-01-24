import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcounter] =useState(5)
//let counter = 5
const addvalue =()=>{
  console.log("clicked",Math.random());
setcounter(counter)
if( counter=== 20){
  setcounter(20)
}
else{
  setcounter(counter+1)
}
}
const delvalue=()=>{
  console.log("clicked",Math.random())
 if(counter>0){
  setcounter(counter-1)
 }
 else{
  setcounter(0)
 }
}
  return (
    <>
     <h1>React with Asma</h1>
     <h3>Counter Value : {counter}</h3>
     <button onClick={addvalue}>Add Value</button>
     <br />
     <button onClick={delvalue}>Delete Value</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
