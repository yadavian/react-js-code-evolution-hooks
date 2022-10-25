import React, { useState } from 'react'

const useCounter = (initialCount = 0, value) => {
    const [count, setCount] = useState(initialCount)

    const inc = () => {
        setCount(prevCount => prevCount + value)
    }

    const dec = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(0)
    }

    return [count, setCount, inc, dec, reset]


}

export default useCounter