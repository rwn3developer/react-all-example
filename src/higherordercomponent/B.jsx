import { useState } from "react";
import Hoc from "./Hoc";

const B = ({count,increment}) => {
    return (
        
        <button onMouseOver={ () => increment() }>B {count} Click</button>
    )
}

export default Hoc(B);