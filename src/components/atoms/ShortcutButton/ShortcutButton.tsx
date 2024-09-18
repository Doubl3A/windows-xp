interface ShortcutButtonProps {
    title: string;
    titleStyle: "normal" | "bold";
    description?: string;
    size: "default" | "small";
    iconUrl: string;
    onClick?: () => void;
    toolTip?: string; // TODO - classic tooltip on hover
}

function ShortcutButton(props: ShortcutButtonProps) {
    return (
        <li className={"shortcut-button__item"}>
            <button className={`shortcut-button shortcut-button--${props.size}`} onClick={props.onClick}>
                <img src={props.iconUrl} alt=""/>
                <div className={"shortcut-button__content"}>
                    <span className={`shortcut-button__title shortcut-button__title--${props.titleStyle}`}>
                        {props.title}
                    </span>
                    {props.description && (<span className={"shortcut-button__description"}>{props.description}</span>)}
                </div>
            </button>
        </li>
    )
}

export default ShortcutButton;