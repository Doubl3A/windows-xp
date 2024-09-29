import StartButton from "../../atoms/StartButton/StartButton.tsx";
import WindowTabs from "../../molecules/WindowTabs/WindowTabs.tsx";
import ProcessMenu from "../../molecules/ProcessMenu/ProcessMenu.tsx";
import {IWindowTab} from "../../atoms/WindowTab/WindowTab.tsx";

interface ITaskbar {
    activeWindows?: IWindowTab[]
}

function Taskbar(props: ITaskbar) {

    return (
        <div className={"taskbar"}>
            <StartButton/>
            <WindowTabs activeWindows={props.activeWindows ?? []}/>
            <ProcessMenu/>
        </div>
    );
}

export default Taskbar;