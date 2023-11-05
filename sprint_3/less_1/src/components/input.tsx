import {ChangeEvent, useState} from "react";

export const Input = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input
            value={parentValue}
            onChange={onChange}/>
    )
}