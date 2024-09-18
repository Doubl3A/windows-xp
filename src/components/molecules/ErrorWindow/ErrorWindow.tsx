import Draggable from 'react-draggable';
import TitleBar from "../../atoms/TitleBar/TitleBar.tsx";

interface ErrorWindowProps {
    handleClose?: () => void;
}

function ErrorWindow(props: ErrorWindowProps) {
    return (
        <Draggable handle={".title-bar"}>
            <section className={"error-window"}>
                <TitleBar windowName={"Failed to open Discord"} handleClose={props.handleClose}/>
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