import { useState } from 'react'

function getInitialValue() {
    console.log("Obtendo o valor inicial");
    return 1 + 1;
}

export default function useCounter() {
    // Como estamos passando uma função, ele sabe que deve executar ela apenas uma vez
    const [count, setCount] = useState(() => getInitialValue()) 

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
    }

    return { count, increment }
}