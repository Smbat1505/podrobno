import React from "react";
import {ClockViewPropsType} from "./Clock";
import stl from "./Clock.module.css";



export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    // const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (

            <div className={stl.clock}>
                <div className={stl["analog-clock"]}>
                    <div className={`${stl.dial} ${stl.seconds}`} style={secondsStyle}/>
                    <div className={`${stl.dial} ${stl.minutes}`} style={minutesStyle}/>
                    <div className={`${stl.dial} ${stl.hours}`} style={hoursStyle}/>
                </div>
            </div>
    );
};
