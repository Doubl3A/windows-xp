import "./StartButton.css"

function StartButton() {
    return (
        <button className={"start-button"}>
            <img src={"/windows-xp-start-logo.png"} alt={""}/>
            start
        </button>
    );
}

export default StartButton;