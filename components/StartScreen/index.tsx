'use client'
import { SetStateAction, useState } from "react"

interface StartScreenProps {
  handleStart: (userName: string) => void
}

const StartScreen = ({handleStart}:StartScreenProps) => {

  const [userName, setUserName] = useState("")

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUserName(e.target.value)
  }

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 my-4">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col text-left gap-1.5">
        <label className="text-sm font-bold text-slate-800" htmlFor="username">Enter your name:
          <input type="text" id="username" value={userName} onChange={handleChange} 
          className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none  focus:ring-amber-400 focus:border-amber-400 font-medium "/>
        </label>
        </div>
      </form>

      {userName.length > 0 &&
        <button onClick={() => handleStart(userName)} className="w-full py-3.5 px-6 mt-4 bg-amber-400 hover:bg-amber-500  text-slate-900 font-bold text-lg rounded-xl shadow-md  cursor-pointer"
        >Start</button>
      }
    </div>
  )
}

export default StartScreen