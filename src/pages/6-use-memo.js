import React, { useMemo, useState } from 'react'

const UseMemoHooks = () => {

    //  jab counter one btn click pe inc hota h toh wo slow hota h kyuki me counter one ko chack kar raha hu even ke liye, but counter-two ke click pe bhi slow ho raha h jab ki wo even h ya odd h apne ko chack bhi nhi karna h.

    //  jab bhi hum counter-one pe click karte h toh component re-render hota h aur isEven Function bhi execute hota h jsiki wajah d=se counter-two ke click hone pe bhi isEven check ho raha h.

    // value ko calculate nahi karna h usmemo me.
    // usecallback me function ko execute nhi hone dena h.

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incOne = () => {
        setcounterOne(counterOne + 1)
    }
    const incTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log('is-Even');
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div className='m-5'>
            <h2>{counterOne} - {isEven ? 'even' : 'odd'}</h2>
            <button onClick={incOne}>Inc One</button>
            <br />
            <h2>{counterTwo}</h2>
            <button onClick={incTwo}>Inc Two</button>
        </div>
    )
}

export default UseMemoHooks