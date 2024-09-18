export interface TitleBarProps {
    windowName: string;
    handleClose?: () => void;
    handleExpand?: () => void;
    handleMinimize?: () => void;
}

function TitleBar(props: TitleBarProps) {
    return (
        <div className={"title-bar"}>
            <span>Error - {props.windowName}</span>
            <div className={"title-bar__controls"}>
                {props.handleMinimize &&
                    <button className={"title-bar__minimize"}
                            onClick={props.handleMinimize}/>}
                {props.handleExpand &&
                    <button className={"title-bar__expand"}
                            onClick={props.handleExpand}/>}
                {props.handleClose &&
                    <button className={"title-bar__close"}
                            onClick={props.handleClose}/>}
            </div>
        </div>
    )
}

export default TitleBar;