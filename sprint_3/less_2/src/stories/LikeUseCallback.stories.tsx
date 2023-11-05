import React, {useCallback, useMemo, useState} from "react";

export default {title: 'UseCallback'}


let bookTitles = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "Introduction to the Theory of Computation",
    "Code Complete: A Practical Handbook of Software Construction",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    "Algorithms: Part I",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "The Mythical Man-Month: Essays on Software Engineering",
    "Head First Design Patterns",
    "Programming Ruby: The Pragmatic Programmers' Guide",
    "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "The C Programming Language"
];


export const UseCallback = () => {
    console.log('UseCallback')
    const [books, setBooks] = useState<string[]>(bookTitles)
    const [counter, setCounter] = useState(0)

    const memoAddBooks = useMemo(() => {
        return ()=> {
            const newBooks = [...bookTitles, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }

    }, [bookTitles])

    const addBooks1 = useCallback(() => {
        const newBooks = [...bookTitles, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [bookTitles])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Books addBooks={addBooks1}/>
    </>
}

export const BooksSecret = (props: {  addBooks: () => void }) => {
    debugger
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBooks()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)
