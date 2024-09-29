import StartButton from "../../atoms/StartButton/StartButton.tsx";
import WindowTabs from "../../molecules/WindowTabs/WindowTabs.tsx";
import ProcessMenu from "../../molecules/ProcessMenu/ProcessMenu.tsx";
import {useContext} from "react";
import {
    DesktopEnvironmentContext,
    DesktopEnvironmentContextType
} from "../../../context/DesktopEnvironmentContextType.tsx";

function Taskbar() {
    const {applications} = useContext(DesktopEnvironmentContext) as DesktopEnvironmentContextType;

    return (
        <div className={"taskbar"}>
            <StartButton/>
            <WindowTabs applications={applications}/>
            <ProcessMenu/>
        </div>
    );
}

export default Taskbar;