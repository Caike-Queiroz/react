import PropTypes from "prop-types";

Comment.propTypes = {
    email: PropTypes.string,
    commentDate: PropTypes.string,
    commentTime: PropTypes.string,
    commentText: PropTypes.string
}

export default function Comment({ email, commentDate, commentTime, commentText }) {

    return (
        <div className="comment">
            <span>{email}</span>
            <p>Em {commentDate}, {commentTime}</p>
            <p>{commentText}</p>
        </div>
    )
}