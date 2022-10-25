import React from 'react'
import useCounter from './useCounter'

const CounterComponent = () => {
    const [count, setCount, inc, dec, reset] = useCounter(0, 5)
    return (
        <div className='m-5'>
            {count}
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterComponent