import WindowTab from "../../atoms/WindowTab/WindowTab.tsx";
import {IApplication} from "../../../interfaces/IApplication.ts";

interface IWindowTabs {
    applications: IApplication[];
}

function WindowTabs(props: IWindowTabs) {
    return (
        <ul className={"window-tabs"}>
            {props.applications.map(window =>
                <li key={`window-tab-${window.name}`} className={"window-tabs__item"}>
                    <WindowTab {...window}/>
                </li>
            )}
        </ul>
    );
}

export default WindowTabs;