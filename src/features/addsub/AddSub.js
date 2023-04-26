//RFC

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, selectCount } from './addSubSlice'

export default function AddSub() {
    //2.1 HOOKS AREA
    let state = useSelector(selectCount)
    let dispatch = useDispatch()
    return (
        <>
            { console.log(state)}
            <h1>{state}</h1>
            <button onClick={()=>{ dispatch(increment()) }}>+</button>
            <button onClick={()=>{ dispatch(reset()) }}>Reset</button>
            <button onClick={()=>{ dispatch(decrement()) }}>-</button>
        </>
    )
}
