import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const anotheruser = "jihan sikandar turkey"
function MyApp(){
  return (
   <div>
   <h1>Custom React with vite !</h1>
   </div>
  )
}

const anotherElemet=(
  <a href="https://www.google.com" target='_blank'>visit link</a>
)

const ReactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  ' visit link',
  anotheruser
)
createRoot(document.getElementById('root')).render(
ReactElement
)
