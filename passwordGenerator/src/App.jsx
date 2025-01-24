import { useState,useCallback,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
//e or dependencies are changed
//3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  //use ref hook
  const passwordRef = useRef(null)

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.selectSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~@#$%^&*(){}[]"
     for (let i = 1; i < length; i++) {
     let char = Math.floor(Math.random()*str.length +1)
  pass += str.charAt((char))
      
     }
 setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <>
  <div className="w-full max-w-lg px-10 mx-auto my-40 text-orange-500 bg-gray-700 rounded-lg shadow-md">
        <h1 className="text-center text-white text-2xl mb-4">Password Generator</h1>
        
        {/* Password Input and Copy Button */}
        <div className="flex items-center mb-4 overflow-hidden rounded-md shadow">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 outline-none bg-gray-200 text-gray-800"
            placeholder="Generated password"
            ref={passwordRef}
            readOnly
          />
          <button 
            onClick={copyPasswordtoClipboard}
            className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1"
          >
            Copy
          </button>
        </div>

        {/* Controls for Password Options */}
        <div className="flex flex-col gap-4 text-sm text-white">
          
          {/* Length Slider */}
          <div className="flex items-center gap-x-2">
            <label>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer flex-grow"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Number Checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          {/* Character Checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Include Special Characters</label>
          </div>

          {/* Generate Password Button */}
          <button
            onClick={passwordGenerator}
            className="bg-green-600 hover:bg-green-700 text-white py-2 mt-4 rounded-md"
          >
            Generate Password
          </button>
        </div>
      </div>
   
    </>
  )
}

export default App
