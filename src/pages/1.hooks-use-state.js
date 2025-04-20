import React, { useState } from 'react'

const UseStateHook = () => {

    const [counter, setCounter] = useState(0)
    console.log(`counter  =>`, counter)

    const incFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevCount => prevCount + 1)
        }
    }
    const [name, setname] = useState({ fn: '', ln: '' });
    const [items, setitems] = useState([])

    const addItems = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>useState</h1>
            <div className='m-5'>
                <h1>count : {counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>Inc by 1</button>
            </div>

            <div className='m-5'>
                <button onClick={incFive}>increment by 5 </button>
            </div>

            <div className='m-5'>
                <input type='text'
                    value={name.fn}
                    onChange={(e) => setname({ ...name, fn: e.target.value })}
                />
                <input type='text'
                    value={name.ln}
                    onChange={(e) => setname({ ...name, ln: e.target.value })}
                />
                <h1>{JSON.stringify(name)}</h1>
            </div>

            <div className='m-5'>

                <button onClick={addItems}>add obj in array</button>
                {items.map((d,i)=>{
                    return <>
                    <li>{d.value}</li>
                    </>
                })}
            </div>
        </>
    )
}

export default UseStateHook