import { useState } from "react";

export default function useCommentCollection() {

    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem("comments-section");
        if (!storedComments) return []; // Se tiver vazio, retorna uma array vazia
        return JSON.parse(storedComments); 
    })

    const addComment = ({ email, commentText }) => {

        const id = Math.floor(Math.random() * 1000000);
        const commentDate = new Date().toLocaleDateString(); // Pega a data, ex: 09/03/2024
        const commentHour = new Date().getHours();          // Pega apenas a hora, ex: 15
        const commentMinutes = new Date().getMinutes();    // Pega apenas os minutos, ex: 36
        const commentSeconds = new Date().getSeconds();   // Pega apenas os segundos, ex: 58
        
        // Concatena todas as variáveis de cima
        const commentTime = `${String(commentHour)}:${String(commentMinutes)}:${String(commentSeconds)}`; 
        const comment = { id, email, commentDate, commentTime, commentText };
        
        setComments((state) => {
            const newState = [...state, comment];
            localStorage.setItem("comments-section", JSON.stringify(newState));
            return newState;
        });
    };

    return { comments, addComment };
}