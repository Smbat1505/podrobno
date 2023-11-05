import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

export const MySelectFunction = () => {
    const [value, setValue] = useState('2')
    return < >
        < Accordion
            titleValue={value}
            onClick={setValue}
            items={
                [
                    {title: 'Boss', value: 88},
                    {title: 'igor', value: 8},
                    {title: 'Yra', value: 80},
                    {title: 'Inga', value: 1}
                ]
            }
         />

    </>
}
