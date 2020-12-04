import React, { useState, useEffect } from 'react'

const Practice = () => {
    const [names, setNames] = useState([])





    useEffect(() => {
        async function fetchdata() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(response.data)
        }
        fetchdata();

    }, [])

    return (
        <div>
            hii
        </div>
    )
}

export default Practice
