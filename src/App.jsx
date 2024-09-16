import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const addbtn=()=>{
    setCount(count+1);
  }
 const removebtn=()=>{
    setCount(count-1);
  }

  return (
    <>
    <div className='border px-5 py-5 w-1/4 text-center mt-10 h-40 m-auto '>
    <div  classNam e='font-bold text-lg mb-80'>Counter:{count}</div>
      <button className='border bg-orange-700 mr-3 p-2 text-white'  onClick={addbtn}>Increment</button>
      <button className='border bg-orange-700 p-2 text-white ' onClick={removebtn}>Decrement</button>
      </div>

    </>
  )
}

export default App
