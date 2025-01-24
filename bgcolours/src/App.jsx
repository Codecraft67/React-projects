import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-full duration-200' style={{ backgroundColor: color }}>
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-slate-500 rounded-3xl'>
          <button onClick={() => setColor("red")}
            className='px-4 py-1 text-white rounded-full outline-none'
            style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")}
            className='px-4 py-1 text-white rounded-full outline-none'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("green")}
            className='px-4 py-1 text-white rounded-full outline-none'
            style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("pink")}
            className='px-4 py-1 text-white rounded-full outline-none'
            style={{ backgroundColor: "pink" }}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
