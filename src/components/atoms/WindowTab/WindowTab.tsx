export interface IWindowTab {
    windowName: string;
    iconUrl: string;
    isFocused?: boolean;
}

function WindowTab(props: IWindowTab) {
    return (
        <button className={`window-tab ${props.isFocused ? "window-tab--active" : ""}`}>
            <img src={props.iconUrl} alt={""}/>
            <span>{props.windowName}</span>
        </button>
    )
}

export default WindowTab;