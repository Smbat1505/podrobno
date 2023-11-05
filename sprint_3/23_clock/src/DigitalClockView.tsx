import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const get2DigitalString = (num: number) => num < 10 ?  '0' + num : num

    return (
        <>
            <span>{get2DigitalString(date.getHours())}</span>
            :
            <span>{get2DigitalString(date.getMinutes())}</span>
            :
            <span>{get2DigitalString(date.getSeconds())}</span> {/*.toLocaleString()*/}
        </>
    )
};
