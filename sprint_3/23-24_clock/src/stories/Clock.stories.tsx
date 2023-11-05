import React from "react";
import {Clock} from "../Clock";
import {action} from "@storybook/addon-actions"

export default {
    title: 'Clock',
    component: Clock,

}

export const ClockExampleBase = () => {
    return <Clock mode={'digital'}/>

}

export const ClockExampleAnalog = () => {
    return <Clock mode={'analog'}/>
}
