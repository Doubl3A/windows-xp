import "./AppShortcut.css"


import Draggable from "react-draggable";
import React, {useState} from "react";
import ErrorWindow from "./ErrorWindow.tsx";

interface AppShortcutProps {
    AppName: string;
    AppIconUrl: string;
}

function AppShortcut(props: AppShortcutProps) {
    const [applicationOpen, setApplicationOpen] = useState(false);

    const handleAppInteraction = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.detail == 2) {

            await new Promise(resolve => setTimeout(resolve, 1000));

            setApplicationOpen(true);
        }
    }

    const handleWindowClose = () => {
        setApplicationOpen(false);
    }

    return (
        <>
            <Draggable
                handle={".app-shortcut"}
            >
                <button className={"app-shortcut"} onClick={handleAppInteraction}>
                    <img src={props.AppIconUrl} alt={""}/>
                    <h2>{props.AppName}</h2>
                </button>
            </Draggable>

            {applicationOpen && <ErrorWindow handleClose={handleWindowClose}/>}
        </>

    );
}

export default AppShortcut;