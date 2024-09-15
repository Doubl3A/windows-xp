import Desktop from "../../organisms/Desktop/Desktop.tsx";
import Taskbar from "../../organisms/Taskbar/Taskbar.tsx";

function DesktopEnvironment() {
    return (
        <div className={"desktop-environment"}>
            <Desktop/>
            <Taskbar/>
        </div>
    )
}

export default DesktopEnvironment;