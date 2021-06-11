import CounterContext from './CounterContext';
import React, { useState } from 'react'
import Child from './Child';
import Child2 from './Child2';



// class-05.surge.sh



function App() {
  let countState = useState(1); // [count, setCount]
  return (
   <CounterContext.Provider value={countState}> 
    <div>
<Child/>
<Child2/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
