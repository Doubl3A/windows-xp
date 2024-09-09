import './Taskbar.scss'

import StartButton from "./startButton/StartButton.tsx";
import WindowTabs from "./windowTabs/WindowTabs.tsx";
import ProcessMenu from "./processMenu/ProcessMenu.tsx";

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