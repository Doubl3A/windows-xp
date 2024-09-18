import {useState} from "react";
import StartMenu from "../../organisms/StartMenu/StartMenu.tsx";

function StartButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={`start-button ${isOpen ? "start-button--active" : ""}`}
                    onClick={() => setIsOpen(prevState => !prevState)}>
                <img src={"/images/windows-xp-start-logo.png"} alt={""}/>
                <span>start</span>
            </button>
            {isOpen && <StartMenu/>}
        </>
    );
}

export default StartButton;