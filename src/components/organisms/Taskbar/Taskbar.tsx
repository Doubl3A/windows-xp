import StartButton from "../../atoms/StartButton/StartButton.tsx";
import WindowTabs from "../../molecules/WindowTabs/WindowTabs.tsx";
import ProcessMenu from "../../molecules/ProcessMenu/ProcessMenu.tsx";

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