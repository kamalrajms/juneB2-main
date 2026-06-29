import React from 'react'

export default function ConditionallRender() {
    const user = true
    return (
        <div>
            <h2>ConditionallRender</h2>
            {user ? <h3>welcome back...!</h3> : <h3>please login...!</h3>}

            {user && <p>Lorem ipsum dolor sit am
                et consectetur adipisicing elit. Expedita,
                 velit. Nulla quasi nobis sapiente maxime e
                 um totam fugiat cupiditate velit esse. Ipsa, 
                ad optio delectus illo non hic reiciendis veritatis.</p>}

        </div>
    )
}
