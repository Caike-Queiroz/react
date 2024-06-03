import { useRef } from "react";
import { useState } from "react";
import RefExample from "./RefExample";

export default function App() {

  let variable = 0;
  const ref = useRef(0)
  const [state, setState] = useState(0);
  

  const showValues = () => {
    alert(`
      Variável: ${variable}
      State: ${state}
      Ref: ${ref.current}
    `);
  }

  return (
    <div>
      <h2>Exemplo de use ref com o DOM</h2>

      <RefExample/>
      <hr />
      <h2>Conhecendo o useRef</h2>
      <hr />
      <ul>
        <li>Variável: {variable}</li>
        <li>State: {state}</li>
        <li>Ref: {ref.current}</li>
      </ul>

      <button
        onClick={() => {variable++}}
      >
        Aumentar variável
      </button>

      <button
        onClick={() => {setState(state => state + 1)}}
      >
        Aumentar state
      </button>

      <button
        onClick={() => (ref.current++)}
      >
        Aumentar ref
      </button>
      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}