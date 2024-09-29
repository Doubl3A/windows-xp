import Draggable from "react-draggable";
import React, {useState} from "react";
import ErrorWindow from "../../molecules/ErrorWindow/ErrorWindow.tsx";
import {IWindowTab} from "../WindowTab/WindowTab.tsx";

export interface AppShortcutProps {
    appName: string;
    appIconUrl: string;
}

// TODO - this should not be static, but provided from desktop instead
const appInfo: IWindowTab = {
    windowName: "Discord",
    iconUrl: "/images/discord-app-icon.png",
}

function AppShortcut(props: AppShortcutProps) {
    const [applicationOpen, setApplicationOpen] = useState(false);

    const handleAppInteraction = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.detail == 2 && !applicationOpen) {

            await new Promise(resolve => setTimeout(resolve, 1000));

            setApplicationOpen(true);
        }
    }

    const handleWindowClose = () => {
    }

    return (
        <>
            <Draggable handle={".app-shortcut"}>
                <button className={"app-shortcut"} onClick={handleAppInteraction}>
                    <img src={props.appIconUrl} alt={""} draggable={false}/>
                    <h2>{props.appName}</h2>
                </button>
            </Draggable>

            {applicationOpen && <ErrorWindow handleClose={handleWindowClose} appInfo={appInfo}/>}
        </>

    );
}

export default AppShortcut;