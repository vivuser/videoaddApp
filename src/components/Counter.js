import { useRef, useState } from "react";

function Counter() {
    console.log('render Counter')
    const [number, setNumber] = useState(0); 
    let num = useRef(0);

    function handleClick(){
        setNumber(number=>number+1);
        num.current++

        console.log(num)
    }

    return(
        <>
        <h1 style={{color: 'white'}}>{number}</h1>
        <button onClick ={handleClick}>Add</button>
        </>
    )

}

export default Counter;