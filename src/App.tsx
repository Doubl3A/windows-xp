import './App.css'
import Desktop from "./components/Desktop.tsx";
import Taskbar from "./components/Taskbar.tsx";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";

function App() {

    return (
        <>
            <div className={"app"}>
                <Desktop/>
                <Taskbar/>
            </div>
            <SpeedInsights/>
            <Analytics/>
        </>
    )
}

export default App
