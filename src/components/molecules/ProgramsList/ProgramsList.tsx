import ShortcutButton from "../../atoms/ShortcutButton/ShortcutButton.tsx";
import Separator from "../../atoms/Separator/Separator.tsx";

function ProgramsList() {
    return (
        <div className={"program-list"}>
            <div className={"program-list__programs-wrapper"}>
                <ul>
                    <ShortcutButton title={"Internet"}
                                    titleStyle={"bold"}
                                    description={"Internet Explorer"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/internet-explorer.png"}/>
                    <ShortcutButton title={"E-mail"}
                                    titleStyle={"bold"}
                                    description={"Outlook Express"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/outlook-express.png"}/>
                </ul>
                <Separator variant={"light"}/>
                <ul>
                    <ShortcutButton title={"Windows Media Player"}
                                    titleStyle={"normal"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/windows-media-player.png"}/>
                    <ShortcutButton title={"Tour Windows XP"}
                                    titleStyle={"normal"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/tour-windows-xp.png"}/>
                    <ShortcutButton title={"Windows Messenger"}
                                    titleStyle={"normal"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/windows-messenger.png"}/>
                    <ShortcutButton title={"Files and Settings Transfer Wizard"}
                                    titleStyle={"normal"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/files-and-settings-transfer-wizard.png"}/>
                    <ShortcutButton title={"Minesweeper"}
                                    titleStyle={"normal"}
                                    size={"default"}
                                    iconUrl={"/icons/applications/minesweeper.png"}/>
                </ul>
            </div>
            <div className={"program-list__all-programs"}>
                <Separator variant={"light"}/>
                <button>
                    <span>All Programs</span>
                    <img src={"/icons/all-programs-arrow.png"} alt={""}/>
                </button>
            </div>
        </div>
    );
}

export default ProgramsList;