import React, { useState } from 'react'

const ClickCounter = (props) => {
    console.log(`ClickCounter props  =>`, props)
    // const [count, setcount] = useState(0)

    // const inc_count = () => {
    //     setcount(count + 1)
    // }

    return (
        <div className='m-5'>
            <button onClick={props.inc_count}>Increment {props.count}</button>
        </div>
    )
}

export default ClickCounter