import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [value, setvalue] = useState(0)

    // useEffect(() => {
    //     console.log("Runs every times when something changes");
    // })

    useEffect(() => {
        console.log("Runs on page load");
    }, [])

    // useEffect(() => {
    //     console.log("Runs when value changes");
    // }, [value])

    // ==================== CLEANUP =======================
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)


    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log("cleanup when component un-mounted.");
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX)
        setX(e.clientY)
    }


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>UseEffectHook</h1>
            <div className='m-5'>
                <h1>value : {value}</h1>
                <button onClick={() => setvalue(value + 1)}>Increment Value</button>
            </div>

            <div className='mt-5'>
                <h1>X : {X}</h1>
                <h1>Y : {Y}</h1>
            </div>

        </>
    )
}

export default UseEffectHook