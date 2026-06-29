import React from 'react'

export default function ListRender() {
    const fruits = ["apple", "orange", "bannana", "mango", "react"]

    const user = [{id:1,name:"react"},{id:1,name:"react"},{id:1,name:"react"}]
    return (
        <div>
            <h2>ListRender</h2>
            <h2>Fruits data</h2>
            {fruits.map((name, ind) => (
                <h3 key={ind}>{name}</h3>
            ))}

            <h2>User data</h2>
            {/* user=[{},{},{}] */}
            {/* person={id:1} */}

            {user.length > 0 ? (
                <div>{
                    user.map((person) => (
                        <p key={person.id}>{person.id}.{person.name}</p>
                    ))
                }</div>
            ) : (<p>no data found</p>)}

        </div>
    )
}
