import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';



const Child2 = ()=>{
    let [state, dispatch] = useReducer(CounterReducer,1)
    return(
        <div>
            <h2>Child using CounterReducer</h2>
            <h3>Value of reducer state: {state}</h3>
            <button  onClick={()=>dispatch('INCREMENT')}>Reducer up</button>
        </div>
    )
}

export default Child2;