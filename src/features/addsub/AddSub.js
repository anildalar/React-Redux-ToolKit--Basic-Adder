//RFC

import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './addSubSlice'

export default function AddSub() {
    //

    let state = useSelector(selectCount)
    return (
        <>
            { console.log(state)}
            <h1>{state}</h1>
            <button>+</button>
            <button>Reset</button>
            <button>-</button>
        </>
    )
}
