import Draggable from "react-draggable";
import {IApplication} from "../../../interfaces/IApplication.ts";
import {useState} from "react";
import ErrorWindow from "../../molecules/ErrorWindow/ErrorWindow.tsx";

export interface AppShortcutProps {
    appInfo: IApplication,
    addApplication?: (application: IApplication) => void,
    removeApplication?: (application: IApplication) => void,
}

function AppShortcut(props: AppShortcutProps) {
    const [applicationOpen, setApplicationOpen] = useState(false);

    const handleAppInteraction = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.detail == 2 && !applicationOpen) {

            await new Promise(resolve => setTimeout(resolve, 500));

            setApplicationOpen(true);
            if (props?.addApplication) {
                props.addApplication(props.appInfo);
            }
        }
    }

    const handleWindowClose = () => {
        setApplicationOpen(false);
        if (props.removeApplication) {
            props?.removeApplication(props.appInfo);
        }
    }

    return (
        <>
            <Draggable handle={".app-shortcut"}>
                <button className={"app-shortcut"} onClick={handleAppInteraction}>
                    <img src={props.appInfo.iconUrl} alt={""} draggable={false}/>
                    <h2>{props.appInfo.name}</h2>
                </button>
            </Draggable>

            {applicationOpen && <ErrorWindow handleClose={handleWindowClose} appInfo={props.appInfo}/>}
        </>

    );
}

export default AppShortcut;