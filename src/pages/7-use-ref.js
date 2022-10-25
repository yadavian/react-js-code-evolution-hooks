import React, { useEffect, useRef } from 'react'

const UseRefHooks = () => {

    const inputRef = useRef(null)

    useEffect(() => { 
        inputRef.current.focus()
    }, [])

    return (
        <div className='m-5'>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default UseRefHooks