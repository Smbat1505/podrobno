import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {MySelect} from "./MySelect";

export default {
    title: 'MySelect',
    component: MySelect
}

export const MySelectFunction = () => {
    const [value, setValue] = useState('2')
    return < >
        < MySelect
            value={value}
            onChange={setValue}
            items={
                [
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Yerevan'}
                ]
            }
        />

    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <MySelect
        onChange={setValue}
        value={value}
        items={
            [
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Yerevan'}
            ]
        }/>
}


