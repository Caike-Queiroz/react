import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
    
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (ev) => {

        ev.preventDefault();
        addGame({ title, cover });
        
        // Limpa o valor dos inputs
        setTitle("");
        setCover("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="Título:"
                atributesValue="title"
                value={title}
                setValue={setTitle}
            />

            <TextInput
                label="Capa:"
                atributesValue="cover"
                value={cover}
                setValue={setCover}
            />
            <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}