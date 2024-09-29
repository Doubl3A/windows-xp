import Desktop from "../../organisms/Desktop/Desktop.tsx";
import Taskbar from "../../organisms/Taskbar/Taskbar.tsx";
import DesktopEnvironmentProvider from "../../../context/DesktopEnvironmentContextType.tsx";

function DesktopEnvironment() {
    return (
        <DesktopEnvironmentProvider>
            <div className={"desktop-environment"}>
                <Desktop/>
                <Taskbar/>
            </div>
        </DesktopEnvironmentProvider>
    )
}

export default DesktopEnvironment;