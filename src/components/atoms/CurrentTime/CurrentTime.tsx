import {useState} from "react";

function CurrentTime() {
    const [time] = useState(new Date())

    // TODO - Rework. Cause slowdown of whole web app
    // const UpdateTime = () => {
    //     setTime(new Date())
    // }
    // setInterval(UpdateTime)

    return (
        <span>{time.toLocaleTimeString()}</span>
    );
}

export default CurrentTime;