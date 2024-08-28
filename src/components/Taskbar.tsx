import './Taskbar.css'

import StartButton from "./taskbar/StartButton.tsx";
import WindowTabs from "./taskbar/WindowTabs.tsx";
import ProcessMenu from "./taskbar/ProcessMenu.tsx";

function Taskbar() {
    return (
        <div className={"taskbar"}>
            <StartButton/>
            <WindowTabs/>
            <ProcessMenu/>
        </div>
    );
}

export default Taskbar;