import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type ClockPropsType = {
    mode?: 'analog' | 'digital'
}
export const Clock: React.FC<ClockPropsType> = ({mode}) => {
    // const date = new Date()
    const [date, setDate] = useState(new Date())

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    let view;

    switch (mode) {
        case 'analog': {
            view = <AnalogClockView date={date}/>
            break
        }

        case 'digital':
        default: {
            view = <DigitalClockView date={date}/>
        }

    }

    return (
        <div>
            {view}
        </div>

    )
}

export type ClockViewPropsType = {
    date: Date
}


