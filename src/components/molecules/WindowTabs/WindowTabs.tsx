import WindowTab, {IWindowTab} from "../../atoms/WindowTab/WindowTab.tsx";

interface IWindowTabs {
    activeWindows: IWindowTab[];
}

function WindowTabs(props: IWindowTabs) {
    return (
        <ul className={"window-tabs"}>
            {props.activeWindows?.map(window =>
                <li key={`window-tab-${window.windowName}`} className={"window-tabs__item"}>
                    <WindowTab {...window}/>
                </li>
            )}
        </ul>
    );
}

export default WindowTabs;