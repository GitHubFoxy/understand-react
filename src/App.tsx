import EffectComponent from "./components/EffectComponent"
import LayoutEffectComponent from "./components/LayoutEffectComponent"
import MakeAFetchRequest from "./components/MakeAFetchRequast"
import StateComponent from "./components/StateComponent"
import "./style.css"

function App() {

  return (
    <>
    <div className="container mx-auto bg-slate-300 px-12 h-screen">
    <h1 className="p-2 text-center text-lg">React hooks</h1>
     <div className="flex gap-4">
     <StateComponent />
     <EffectComponent/>
     <LayoutEffectComponent />
     <MakeAFetchRequest />
     </div>
    </div>
     
    </>
  )
}

export default App
