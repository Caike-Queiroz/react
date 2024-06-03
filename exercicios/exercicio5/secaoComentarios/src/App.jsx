import useCommentCollection from "./hooks/useCommentCollection";
import NewCommentForm from "./components/NewCommentForm";
import Comment from "./components/Comment";

export default function App() {

  const { comments, addComment } = useCommentCollection();

  return (
    <div className="app">
      <h2>Seção de comentários</h2>

      <NewCommentForm 
        addComment={addComment}
      />

      <div className="comments">
          {comments.length > 0 ? 
            comments.map((comment) => (
                <Comment
                  key={comment.id}
                  email={comment.email}
                  commentDate={comment.commentDate}
                  commentTime={comment.commentTime}
                  commentText={comment.commentText}
                />))
            : (
              <h2 style={{margin: "2rem auto"}}>Seja o primeiro a comentar !</h2>
            )}
      </div>
    </div>
  )
}