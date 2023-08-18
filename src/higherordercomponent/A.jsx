import { useState } from "react";
import Hoc from "./Hoc";
const A = ({count,increment}) => {
    return (
        
        <button onClick={ () => increment() }>A {count} Click</button>
    )
}

export default Hoc(A);