import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()
   // const [data,setData] = useState([])
//    useEffect(( )=>{
//fetch('https://api.github.com/users/Codecraft67')
//.then(response => response.json())
//.then(data =>{
//console.log(data);
//setData(data)


  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>
      Github Followers : {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Codecraft67')
    return response.json()
}
