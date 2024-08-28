import "./ErrorWindow.css"

import Draggable from 'react-draggable';
import {MdOutlineClose} from "react-icons/md";

interface ErrorWindowProps {
    handleClose: () => void;
}

function ErrorWindow(props: ErrorWindowProps) {
    return (
        <Draggable handle={".error-window__title-bar"}>
            <section className={"error-window"}>
                <div className={"error-window__title-bar"}>
                    <b>Error - Failed to open Discord</b>
                    <button className={"error-window__close-button"} onClick={props.handleClose}>
                        <MdOutlineClose/>
                    </button>
                </div>
                <div className={"error-window__content"}>
                    <p>
                        An error occurred while trying to open the Discord application. Please contact customer support
                        if this problem persists.
                    </p>
                </div>
            </section>
        </Draggable>
    );
}

export default ErrorWindow;