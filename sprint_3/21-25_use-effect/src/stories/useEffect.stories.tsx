import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
};

export const Example = () => {
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);
    console.log('Example');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>c ={counter}</button>
            <button onClick={() => setFake(fake + 1)}>f={fake}</button>
        </>
    );
};


export const SetTimeOut = () => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('setTimeOut')

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('Set')
            document.title = count.toString()
        }, 1000)

        return () => clearTimeout(timeOut);
    }, [count]);


    return (
        <>
            Hello, {count} {fake}
            <button onClick={() => setCount(count + 1)}>c ={count}</button>
            <button onClick={() => setFake(fake + 1)}>f={fake}</button>
        </>
    );
}

export const SetInterval = () => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetInterval')

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(`Timeout expired`)
            setCount((state) => state + 1)
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            Hello, <br/> counter: {count} <br/> Fake: {fake}
            {/*<button onClick={() => setCount(count + 1)}>c ={count}</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>f={fake}</button>*/}
        </>
    );
}
// api.getUsers().then('')
// setInterval
// indexedDB
// document.getElementId
// document.title = 'Users'


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered ' + counter)
    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('Reset Effect ' + counter)
        }
    }, [counter]);

    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <>Hello, counter: {counter}</>
            <button onClick={increase}>+</button>
        </div>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered ' + text)
    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handle)
        console.log('Effect occurred: ' + text)

        return () => {
            console.log('Reset Effect ' + text)
            window.removeEventListener('keypress', handle)
        }
    }, [text]);

    return (
        <div>
            <>Typed text: {text}</>

        </div>
    )
}
