import AppShortcut from "../../atoms/AppShortcut/AppShortcut.tsx";

function Desktop() {
    return (
        <div className={"desktop"}>
            {/*Discord desktop app*/}
            <AppShortcut AppName={"Discord"} AppIconUrl={"/discord-app-icon.png"}/>
        </div>
    );
}

export default Desktop;