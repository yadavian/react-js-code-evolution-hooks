import React, { useReducer, useState } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, firstCounter: state.firstCounter + action.value };
            break;

        case 'dec':
            return { ...state, firstCounter: state.firstCounter - action.value };
            break;

        case 'inc-sec':
            return { ...state, secondCounter: state.secondCounter + action.value };
            break;

        case 'dec-sec':
            return { ...state, secondCounter: state.secondCounter - action.value };
            break;

        case 'rst':
            return initialState;
            break;

        default:
            return state
            break;
    }
}

const UseReducerHooksObj = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='mt-5'>
            <h1>{count.firstCounter}</h1>

            <button onClick={() => dispatch({ type: 'inc', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'inc', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'dec', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'rst' })}>Reset</button>

            <br />
            <h1>{count.secondCounter}</h1>

            <button onClick={() => dispatch({ type: 'inc-sec', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec-sec', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'inc-sec', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'dec-sec', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'rst' })}>Reset</button>
        </div>
    )
}

export default UseReducerHooksObj