import { useState } from "react"

const MakeAFetchRequest = () => {
    
    const [data, setData] = useState("no data")
    const fetchdata = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result = await response.json()
            setData(result)
        } catch (error) {
            setData('smth went wrong')
        }
    }
    const clear = () => {
        setData('cleared, make a fetch')
    }
    return (
    <div className="bg-slate-400 max-w-md rounded-sm p-4 flex gap-2 flex-col">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">MakeAFetchRequest</h2>
        <p className="text-md">Выполняем фетч на фейк АПИ</p>
        <p className="text-md">fetch, axios, react-query</p>
        <p className="text-md">fetching from jsonplaceholder.typicode.com/todos/1</p>
        <div className="flex flex-col gap-2">
          <p>Title: {data}</p>
        </div>
        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors whitespace-nowrap	" onClick={fetchdata}>Make a fetch</button>
        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors whitespace-nowrap	" onClick={clear}>clear</button>
        <p className="text-sm">bad example, using fetch, use reactQuery</p>

      </div>
    )
}
export default MakeAFetchRequest