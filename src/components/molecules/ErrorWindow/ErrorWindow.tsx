import TitleBar from "../../atoms/TitleBar/TitleBar.tsx";
import WindowWrapper from "../../../utils/WindowWrapper.tsx";
import {IWindowTab} from "../../atoms/WindowTab/WindowTab.tsx";

interface ErrorWindowProps {
    appInfo: IWindowTab,
    handleClose: () => void;
}

function ErrorWindow(props: ErrorWindowProps) {


    const closeWindow = () => {
        props.handleClose();
    }

    return (
        <WindowWrapper draggableSelector={".title-bar"} applicationInfo={props.appInfo}>
            <section className={"error-window"}>
                <TitleBar windowName={"Failed to open Discord"} handleClose={closeWindow}/>
                <div className={"error-window__content"}>
                    <p>
                        An error occurred while trying to open the Discord application. Please contact customer support
                        if this problem persists.
                    </p>
                </div>
            </section>
        </WindowWrapper>
    );
}

export default ErrorWindow;