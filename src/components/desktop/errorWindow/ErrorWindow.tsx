import "xp.css/dist/XP.css";
import "./ErrorWindow.scss"

import Draggable from 'react-draggable';

interface ErrorWindowProps {
    handleClose?: () => void;
}

function ErrorWindow(props: ErrorWindowProps) {
    return (
        <Draggable handle={".title-bar"}>
            <section className={"window error-window"}>
                <div className={"title-bar error-window__title-bar"}>
                    <div className={"title-bar-text"}>Error - Failed to open Discord</div>
                    <div className={"title-bar-controls"}>
                        <button aria-label="Minimize"></button>
                        <button aria-label={"Close"}
                                className={"error-window__close-button"}
                                onClick={props.handleClose}>
                        </button>
                    </div>
                </div>
                <div className={"window-body"}>
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