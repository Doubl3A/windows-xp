import Draggable from "react-draggable";
import {ReactNode} from "react";
import {IApplication} from "../interfaces/IApplication.ts";

interface IWindowWrapper {
    children: ReactNode;
    draggableSelector: string;
    applicationInfo: IApplication;
}

function WindowWrapper(props: IWindowWrapper) {
    return (
        <Draggable handle={props.draggableSelector}>
            {props.children}
        </Draggable>
    );
}

export default WindowWrapper;