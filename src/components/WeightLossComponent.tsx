import { weightData } from "../data/data"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = weightData


const WeightLossComponent = () => {

    return(
    <div className="bg-slate-400 rounded-sm p-4 flex gap-2 flex-col mt-2 max-w-3xl">
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">Weight loss chart</h2>
        <div className="bg-slate-100">
        <LineChart
        width={720}
        height={300}
        data={data}
        >
        <CartesianGrid strokeDasharray="1 1 " />
        <XAxis dataKey="date" />
        <YAxis dataKey="weight"/>
        <Tooltip />
        
        <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
        </LineChart>   
        </div>
        <input type="text" placeholder="enter your morning weight" className="p-2" name="" id="" />
        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors">Add weight</button>
    </div>


    )
}
export default WeightLossComponent