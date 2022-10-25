import React, { useReducer, useState } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    console.log(state);
    switch (action) {
        case 'inc':
            return state + 1;
            break;

        case 'dec':
            return state -1;
            break;

        case 'rst':
            return initialState;
            break;

        default:
            return state
            break;
    }
}

const UseReducerHooks = () => {

    // usereducer statemanagement, metter version of usestate
    // const arr = [1,2,3]
    // const reducer = (accumukator, currentValue)=>accumulator + currentValue;
    // console.log(arr.reduce(reducer,5)) // 5+1+2+3 = 11
    // reduce me do parameter pass karte h pehla func(reducer function uses initial value) and dusra initial value.
    // useReducer(reducer, initialState);
    // newSate = reducer(currState, action);
    // [newState, dispatch]

    // 1. import useReducer. usereDucer accepts two args, reducer function and inital value.
    // 2. define reducer function outside the function which will returns one value by acception current state and acrion.

    // const [count, setcount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='mt-5'>
            <h1>{count}</h1>
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <button onClick={() => dispatch('rst')}>Reset</button>
        </div>
    )
}

export default UseReducerHooks