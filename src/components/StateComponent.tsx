import { useState } from "react"

const StateComponent = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
  }  
  const decreaseCount = () => {
    setCount((prev) => prev - 1)
  }
    return (
      <div className="bg-slate-400 max-w-sm rounded-sm p-4 flex gap-2 flex-col">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">useState</h2>
        <p className="text-xl">count - {count}</p>
        <div className="flex gap-2">
        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors"
        onClick={increaseCount}>add count</button>
        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors"
        onClick={decreaseCount}>decrease count</button>
        </div>
      </div>

    )
}

export default StateComponent