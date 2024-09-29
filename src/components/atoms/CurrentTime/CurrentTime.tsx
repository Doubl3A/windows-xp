import {useEffect, useState} from "react";

function CurrentTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <span>{time.toLocaleTimeString()}</span>
    );
}

export default CurrentTime;