import React, { useState } from 'react'
import './mapexample.css'

export default function MapExample() {

    const handleClick = (name) => {
        alert(name)
    }

    const [data, setData] = useState([
        { id: 1, "name": "Yasin" },
        { id: 2,"name": "Osman" },
        { id: 3,"name": "Kızıltaş" },
    ])
    return (
        <div className='card'>
            <h1>Liste</h1>
            <ul>
                {data.map((item) => {
                   return(
                    <li 
                    key={item.id}
                    onClick={() => handleClick(item.name)}>{item.name}</li>
                   )
                })}
            </ul>
        </div>
    )
}
