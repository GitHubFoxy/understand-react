import Context from "./components/Context"
import EffectComponent from "./components/EffectComponent"
import LayoutEffectComponent from "./components/LayoutEffectComponent"
import MakeAFetchRequest from "./components/MakeAFetchRequast"
import MemoComponent from "./components/MemoComponent"
import StateComponent from "./components/StateComponent"
import TodoListComponent from "./components/TodoListComponent"
import WeightLossComponent from "./components/WeightLossComponent"
import "./style.css"

function App() {

  return (
    <>
    <div className="container mx-auto bg-slate-300 px-12">
    <h1 className="p-2 text-center text-lg">React hooks</h1>
     <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
     <StateComponent />
     <EffectComponent/>
     <LayoutEffectComponent />
     <MakeAFetchRequest />
     <Context />
     <TodoListComponent/>
     <MemoComponent/>
     </div>
     <WeightLossComponent />
    </div>
     
    </>
  )
}

export default App
