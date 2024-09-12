import Desktop from "../../organisms/desktop/Desktop.tsx";
import Taskbar from "../../organisms/taskbar/Taskbar.tsx";

function Default() {
    return (
        <div className={"default"}>
            <Desktop/>
            <Taskbar/>
        </div>
    )
}

export default Default;