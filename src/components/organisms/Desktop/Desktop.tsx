import AppShortcut from "../../atoms/AppShortcut/AppShortcut.tsx";

function Desktop() {
    return (
        <div className={"desktop"}>
            {/*Discord Desktop app*/}
            <AppShortcut appName={"Discord"} appIconUrl={"/images/discord-app-icon.png"}/>
        </div>
    );
}

export default Desktop;