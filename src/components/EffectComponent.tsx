import { useEffect, useState } from "react"

const EffectComponent = () => {
    const [input, setInput] = useState('React hooks')
    
    
    useEffect(() => {
        document.title = input
    }, [input])

    
    
    return (
        <div className="bg-slate-400 max-w-sm rounded-sm p-4 flex gap-2 flex-col">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">useEffect</h2>
        <p className="text-md">useEffect, второй аргумент управляет когда будет выполняться код, пустой массив значит при первом рендере</p>
        <div className="flex gap-2">
        </div>
        <input type="text" className="p-2" placeholder="Change title of the page" onChange={(e) => setInput(e.target.value)}/>
      </div>
    )
}
export default EffectComponent