import ShortcutButton from "../../atoms/ShortcutButton/ShortcutButton.tsx";
import Separator from "../../atoms/Separator/Separator.tsx";

function DocumentsList() {
    return (
        <div className={"document-list"}>
            {/* Documents and this PC */}
            <ul>
                <ShortcutButton title={"My Documents"}
                                titleStyle={"bold"}
                                size={"small"}
                                iconUrl={"/icons/applications/my-documents.png"}/>
                <ShortcutButton title={"My Recent Documents"}
                                titleStyle={"bold"}
                                size={"small"}
                                iconUrl={"/icons/applications/my-recent-documents.png"}/>
                <ShortcutButton title={"My Pictures"}
                                titleStyle={"bold"}
                                size={"small"}
                                iconUrl={"/icons/applications/my-pictures.png"}/>
                <ShortcutButton title={"My Music"}
                                titleStyle={"bold"}
                                size={"small"}
                                iconUrl={"/icons/applications/my-music.png"}/>
                <ShortcutButton title={"My Computer"}
                                titleStyle={"bold"}
                                size={"small"}
                                iconUrl={"/icons/applications/my-computer.png"}/>
            </ul>
            <Separator variant={"dark"}/>
            {/* Settings and devices */}
            <ul>
                <ShortcutButton title={"Control Panel"}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/control-panel.png"}/>
                <ShortcutButton title={"Set Program Access and Defaults"}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/set-program-access-and-defaults.png"}/>
                <ShortcutButton title={"Printer and Faxes"}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/printer-and-faxes.png"}/>
            </ul>
            <Separator variant={"dark"}/>
            {/* Search, run and help */}
            <ul>
                <ShortcutButton title={"Help and Support"}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/help-and-support.png"}/>
                <ShortcutButton title={"Search"}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/search.png"}/>
                <ShortcutButton title={"Run..."}
                                titleStyle={"normal"}
                                size={"small"}
                                iconUrl={"/icons/applications/run.png"}/>
            </ul>
        </div>
    );
}

export default DocumentsList;