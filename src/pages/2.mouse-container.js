import React, { useState } from 'react'
import UseEffectHook from './2.UseEffectHook'

const MouseContainer = () => {
    const [display, setdisplay] = useState(false)
    return (
        <>
            <button onClick={() => setdisplay(!display)}>{display ? "Hide" : "Show"}</button>
            {display && <UseEffectHook />}
        </>
    )
}

export default MouseContainer