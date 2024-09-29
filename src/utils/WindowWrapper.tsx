import Draggable from "react-draggable";
import {ReactNode} from "react";
import {IWindowTab} from "../components/atoms/WindowTab/WindowTab.tsx";

interface IWindowWrapper {
    children: ReactNode;
    draggableSelector: string;
    applicationInfo: IWindowTab;
}

function WindowWrapper(props: IWindowWrapper) {
    return (
        <Draggable handle={props.draggableSelector}>
            {props.children}
        </Draggable>
    );
}

export default WindowWrapper;