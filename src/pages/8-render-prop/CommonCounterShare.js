import React, { useState } from 'react'

const CommonCounterShare = (props) => {

    console.log(`CommonCounterShare props  =>`, props)
    const [count, setcount] = useState(0)

    const inc_count = () => {
        setcount(count + 1)
    }

    return (
        <div>
            {props.render(count, inc_count)}
        </div>
    )
}

export default CommonCounterShare