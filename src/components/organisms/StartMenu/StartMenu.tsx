import ProgramsList from "../../molecules/ProgramsList/ProgramsList.tsx";
import DocumentsList from "../../molecules/DocumentsList/DocumentsList.tsx";
import Separator from "../../atoms/Separator/Separator.tsx";

function StartMenu() {
    return (
        <section className={"start-menu"}>
            <div className={"title-bar start-menu__user"}>
                <img src={"./icons/users/astronaut.webp"} alt={""}/>
                <span>Administrator</span>
            </div>
            <div className={"start-menu__programs"} style={{position: "relative"}}>
                <Separator variant={"orange"}/>
                <ProgramsList/>
                <DocumentsList/>
            </div>
            <div className={"start-menu__power-settings"}>
                <button>
                    <img src={"./icons/start-menu/log-off.png"} alt={""}/>
                    <span>Log Off</span>
                </button>
                <button>
                    <img src={"./icons/start-menu/turn-off.png"} alt={""}/>
                    <span>Turn Off Computer</span>
                </button>
            </div>
        </section>
    )
}

export default StartMenu;