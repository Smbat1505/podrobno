import {ChangeEvent, useState} from "react";

export const Select = () => {
    const [parentValue, setParentValue] = useState('2');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    )
}