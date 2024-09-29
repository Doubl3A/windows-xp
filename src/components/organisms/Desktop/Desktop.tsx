import AppShortcut from "../../atoms/AppShortcut/AppShortcut.tsx";
import {IApplication} from "../../../interfaces/IApplication.ts";
import {useContext} from "react";
import {
    DesktopEnvironmentContext,
    DesktopEnvironmentContextType
} from "../../../context/DesktopEnvironmentContextType.tsx";

const desktopApps: IApplication[] = [
    {
        name: "Discord",
        iconUrl: "/images/discord-app-icon.png",
    },
];


function Desktop() {
    const {addApplication, removeApplication} = useContext(DesktopEnvironmentContext) as DesktopEnvironmentContextType;

    return (
        <div className={"desktop"}>
            {/* Desktop apps */}
            {desktopApps.map((app: IApplication) => {
                return <AppShortcut appInfo={app}
                                    addApplication={addApplication}
                                    removeApplication={removeApplication}/>
            })}
        </div>
    );
}

export default Desktop;