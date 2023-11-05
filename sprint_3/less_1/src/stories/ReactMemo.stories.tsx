import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}
const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

let names = [
    // "Liam",
    // "Olivia",
    // "Noah",
    // "Emma",
    // "Oliver",
    // "Ava",
    // "Isabella",
    // "Sophia",
    // "Mia",
    // "Charlotte",
    // "Amelia",
    // "Harper",
    // "Evelyn",
    // "Abigail",
    // "Emily",
    // "Elizabeth",
    // "Sofia",
    // "Madison",
    // "Ella",
    // "Scarlett",
    // "Grace",
    // "Chloe",
    // "Victoria",
    // "Riley",
    // "Aria",
    // "Lily",
    // "Aubrey",
    // "Zoey",
    // "Hannah",
    // "Nora",
    // "Layla",
    // "Camila",
    // "Addison",
    // "Mila",
    // "Eleanor",
    // "Luna",
    // "Savannah",
    // "Brooklyn",
    // "Leah",
    // "Zoe",
    // "Stella",
    // "Hazel",
    // "Ellie",
    // "Paisley",
    // "Audrey",
    // "Skylar",
    // "Violet",
    // "Claire",
    // "Bella",
    // "Aurora",
    // "Lucy",
    // "Anna",
    // "Samantha",
    // "Caroline",
    // "Genesis",
    // "Aaliyah",
    // "Kennedy",
    // "Kinsley",
    // "Allison",
    // "Maya",
    // "Sarah",
    // "Madelyn",
    // "Adeline",
    // "Alexa",
    // "Alice",
    // "Madeline",
    // "Penelope",
    // "Serenity",
    // "Ariana",
    // "Taylor",
    // "Grace",
    // "Brianna",
    // "Kylie",
    // "Peyton",
    // "Isabel",
    // "Leilani",
    // "Eliza",
    // "Lyla",
    // "Kiara",
    // "Aubree",
    // "Olive",
    // "Harmony",
    // "Adalynn",
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

export const Example = () => {
    const [users, setUsers] = useState<string[]>(names)
    const [counter, setCounter] = useState(0)

    const addUser = () => {

        let newUsers = [...names, 'Sveta ' + new Date().getDate()]

        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}
