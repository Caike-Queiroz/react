import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    
    for (let i = 0; i < passwordSize; i++) {
      const index = Math.floor(Math.random() * characters.length);
      newPassword += characters[index];
    }
    
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {

    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado !");
  }

  function handlePasswordSize(ev) {
    setCustomSize(ev.target.value);
  }

  return (
    <div className="app">
    
      <h1>Gerador de Senhas</h1>

      <div>
        <label htmlFor="showInput">Customizar o tamanho: </label>

        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho da senha: </label>
          <Input
            passwordSize={customSize}
            handlePasswordSize={handlePasswordSize}
          />
        </div>) : null
      }

      <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>

      <button 
        style={copyText === "Copiado !" ? {backgroundColor: "#77dd77"} : {backgroundColor: "#1a1a1a"}} 
        onClick={copyToClipboard}>
          {copyText}
      </button>

      <div className="password">{password}</div>

    </div>  
  )
}