import { useState } from "react";
import PropTypes from "prop-types";

NewCommentForm.propTypes = {
  addComment: PropTypes.func
}

export default function NewCommentForm({ addComment }) {

    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (ev) => {
    
        ev.preventDefault();
        addComment({ email, commentText });

        // Limpa o valor dos inputs
        setEmail("");
        setCommentText("");
    }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="commentText">Comentário</label>
            <textarea 
              name="commentText" 
              id="commentText"
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Enviar comentário</button>
      </form>
    )
}