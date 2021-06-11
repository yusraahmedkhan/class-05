import React, { useContext } from 'react';
import CounterContext  from './CounterContext'

const Child = ()=>{

let counterValue = useContext(CounterContext)

    return(
        <div>
        <h3>Counter Value: {counterValue[0]}  </h3>

        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Counter up</button>
        </div>
    )
}

export default Child;