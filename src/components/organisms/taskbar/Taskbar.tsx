// TODO - migrate xp.css into relevant styling
import "xp.css/dist/XP.css";

import StartButton from "../../atoms/StartButton/StartButton.tsx";
import WindowTabs from "../../molecules/WindowTabs/WindowTabs.tsx";
import ProcessMenu from "../../molecules/ProcessMenu/ProcessMenu.tsx";

function Taskbar() {
    return (
        <div className={"title-bar taskbar"}>
            <StartButton/>
            <WindowTabs/>
            <ProcessMenu/>
        </div>
    );
}

export default Taskbar;