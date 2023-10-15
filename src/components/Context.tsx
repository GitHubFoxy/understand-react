const ContextComponent = () => {
    return (
        <div className="bg-slate-400 max-w-md rounded-sm p-4 flex gap-2 flex-col">
            
        <h2 className="bg-zinc-300 p-1 rounded-sm text-center">useContext</h2>
            <p>
                Share state between all components
            </p>
            <p>
                Better to use external packages like zustand or ReactQuery
            </p>
            </div>
    )
}
export default ContextComponent