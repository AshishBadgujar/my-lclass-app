import React, { useState } from 'react'
import ListCard from '../partials/ListCard'

export default function Tests() {
    const [testFiles, setTestFiles] = useState([
        {
            name: "dummy",
            url: "https://res.cloudinary.com/ashish124/image/upload/v1690100283/crrtj7dmdn97asekqtc6.jpg"
        },
        {
            name: "dummy",
            url: "https://res.cloudinary.com/ashish124/image/upload/v1690100283/crrtj7dmdn97asekqtc6.jpg"
        },
        {
            name: "dummy",
            url: "https://res.cloudinary.com/ashish124/image/upload/v1690100283/crrtj7dmdn97asekqtc6.jpg"
        },
        {
            name: "dummy",
            url: "https://res.cloudinary.com/ashish124/image/upload/v1690100283/crrtj7dmdn97asekqtc6.jpg"
        },
        {
            name: "dummy",
            url: "https://res.cloudinary.com/ashish124/image/upload/v1690100283/crrtj7dmdn97asekqtc6.jpg"
        },
    ])
    return (
        <>
            <ListCard list={testFiles} setList={setTestFiles} title="Test" />
        </>
    )
}
