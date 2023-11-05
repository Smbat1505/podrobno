import React, {useMemo, useState} from 'react'

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 3459606760
}

export const Example = () => {
    console.log('Example')

    const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState<number>(generateData)


    const handleCount = (state: number) => {
        debugger

        return state + 1
    }

    return (
        <>
            <button onClick={() => setCounter(handleCount)}>+</button>
            {counter}
        </>
    )
}
