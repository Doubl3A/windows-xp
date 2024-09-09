import './Desktop.scss'
import AppShortcut from "./appShortcut/AppShortcut.tsx";

function Desktop() {
    return (
        <div className={"desktop"}>
            {/*Discord desktop app*/}
            <AppShortcut AppName={"Discord"} AppIconUrl={"/discord-app-icon.png"}/>
        </div>
    );
}

export default Desktop;