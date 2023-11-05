import React, {useMemo, useState} from "react";

export default {title: 'UseMemo'}

export const Example = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let result_A = 1;
    let result_B = 1;

    result_A = useMemo(() => {
        let temp = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }

            temp *= i // or  result_A =  result_A * i

        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        result_B *= i // or  result_A =  result_A * i
    }
    return <>
        <input value={a} onChange={(e => setA(+e.currentTarget.value))}/>
        <input value={b} onChange={(e => setB(Number(e.currentTarget.value)))}/>
        <hr/>

        <div>
            Result for a: {result_A}
        </div>

        <div>
            Result for b: {result_B}
        </div>
    </>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    // debugger
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

let names = [
    "Laura",
    "Bailey",
    "Piper",
    "London",
    "Willow",
    "Nova",
    "Serenity",
    "Natalie",
    "Kaylee",
    "Ruby",
    "Valentina",
    "Jocelyn",
    "Elise",
    "Josie"
];

export const Examples1 = () => {
    console.log('Examples1')
    const [users, setUsers] = useState<string[]>(names)
    const [counter, setCounter] = useState(0)

    const newArr = useMemo(() => {
        const Arr = users.filter(u => u.toLowerCase().indexOf('n') > -1)
        return Arr
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Anna' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArr}/>
    </>
}
