import { useMemo, useState } from "react"

const MemoComponent = () => {
    const [count, setCount] = useState(1)
    const expensiveCalculation = () => {
        return Math.random() * 100
    }
    const renderedVale = useMemo(() => expensiveCalculation(),[])
    return (
      <div className="bg-slate-400 max-w-sm rounded-sm p-4 flex gap-2 flex-col">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">useMemo</h2>
        <p>useMemo - allows us to cache the values, stop the re-renders</p>
        <p>useMemo wont re-render, {renderedVale}</p>
        <div>
        <p>useState will re-render whole component, {count}</p>
        <button onClick={() => setCount((prev )=> prev + 1) } className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors">add</button>
        </div>
      </div>

    )
}
export default MemoComponent