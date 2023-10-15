import { useEffect, useLayoutEffect, useState } from "react"

const LayoutEffectComponent = () => {
    const [number, setNumber]  = useState(0)
    const [coolNumber, setCoolNumber] = useState(0)
    useEffect(() => {
        function test() {
            if (number === 0) {
                setNumber(Math.round(Math.random() * 100))
            }
        }
        test()
    }, [number])
    useLayoutEffect(() => {
        function test() {
            if (coolNumber === 0) {
                setCoolNumber(Math.round(Math.random() * 100))
            }
        }
        test()
    })

    return (
        <div className="bg-slate-400 max-w-md rounded-sm p-4 flex gap-2 flex-col">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">useLayoutEffect</h2>
        <p className="text-md">Похож на useEffect, не ждет пока данные отобразяться, выполняет код до UI</p>
        <div className="flex gap-2">
            <div>
            <p>useEffect</p>
            <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors	"onClick={() => setNumber(0)}>Сгенироривать число</button>
            <p>number - {number}</p>
            <p>Видно что строчка дергается, потому что на 0.1 секунду результат 0</p>
            </div>
            <div>
            <p>useLayoutEffect</p>
            <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors" onClick={() => setCoolNumber(0)}>Сгенироривать число</button>
            <p>number - {coolNumber}</p>
            <p>Результат на лицо</p>
            </div>
        </div>
      </div>
    )
}
export default LayoutEffectComponent