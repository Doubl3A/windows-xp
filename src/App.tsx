import './App.css'
import Desktop from "./components/Desktop.tsx";
import Taskbar from "./components/Taskbar.tsx";

function App() {

    return (
        <div className={"app"}>
            <Desktop/>
            <Taskbar/>
        </div>
    )
}

export default App
