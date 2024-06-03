import { useState } from "react"

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="container">
      <h1>Olá {!username ? "_____ " : username}, tudo bem com você ?</h1>

      <form>

        <label htmlFor="username">Nome </label>

        <input 
          type="text"
          id="username"
          value={username}
          placeholder="Nome"
          onChange={(ev) => setUsername(ev.target.value)} 
        />

      </form>
    </div>
  )
}