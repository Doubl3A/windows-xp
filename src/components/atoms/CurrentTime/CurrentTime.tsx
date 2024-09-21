import {useState} from "react";

function CurrentTime() {
    const [time, setTime] = useState(new Date())

    const UpdateTime = () => {
        setTime(new Date())
    }
    setInterval(UpdateTime)

    return (
        <span>{time.toLocaleTimeString()}</span>
    );
}

export default CurrentTime;