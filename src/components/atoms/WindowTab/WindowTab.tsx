import {IApplication} from "../../../interfaces/IApplication.ts";

function WindowTab(props: IApplication) {
    return (
        <button className={`window-tab ${props.isFocused ? "window-tab--active" : ""}`}>
            <img src={props.iconUrl} alt={""}/>
            <span>{props.name}</span>
        </button>
    )
}

export default WindowTab;